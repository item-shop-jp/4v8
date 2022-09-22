import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { CaretPosition } from '../types/caret';
import { getBlockElementById } from '../utils/block';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    onUpload: (params: { original: File; base64: string | null; isImage: boolean }) => {
      original: string;
      thumbnail?: string;
      fileName?: string;
      size?: number;
    } | null;
  };
}

export class UploaderModule implements Module {
  private eventEmitter;
  private editor;
  private options: Props['options'];

  constructor({ eventEmitter, editor, options }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
    this.options = { ...options };
  }

  onInit() {
    this.eventEmitter.info('init uploader module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy uploader module');
  }

  upload(files: File[], blockId?: string) {
    if (!this.options.onUpload || typeof this.options.onUpload !== 'function') return;

    files.forEach((file) => {
      const isImage = !!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp)/i);
      if (isImage) {
        const fileReader = new FileReader();
        fileReader.onload = async (event) => {
          const addedBlock = this.editor.getModule('editor').createBlock({
            prevId: blockId,
            type: 'IMAGE',
            attributes: {
              thumbnail: (<FileReader>event.target).result,
            },
            meta: {
              isUploading: true,
            },
          });
          setTimeout(() => {
            const el = getBlockElementById(addedBlock.id);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 20);
          const res = await this.options.onUpload({
            original: file,
            base64: (<FileReader>event.target).result as string,
            isImage,
          });
          if (!res) {
            // todo: error;
            this.editor.deleteBlock(addedBlock.id);
            this.editor.render();
            return;
          }
          this.editor.updateBlock({
            ...addedBlock,
            attributes: { thumbnail: res?.thumbnail ?? res.original },
            meta: {
              isUploading: false,
            },
          });
          this.editor.render([addedBlock.id]);
        };
        fileReader.readAsDataURL(file);
      } else {
        const fileReader = new FileReader();
        fileReader.onload = async (event) => {
          const addedBlock = this.editor.getModule('editor').createBlock({
            prevId: blockId,
            type: 'FILE',
            attributes: {
              fileName: file.name,
              original: (<FileReader>event.target).result,
              size: file.size,
            },
            meta: {
              isUploading: true,
            },
          });
          setTimeout(() => {
            const el = getBlockElementById(addedBlock.id);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 20);
          const res = await this.options.onUpload({
            original: file,
            base64: (<FileReader>event.target).result as string,
            isImage,
          });
          if (!res) {
            // todo: error;
            this.editor.deleteBlock(addedBlock.id);
            this.editor.render();
            return;
          }
          this.editor.updateBlock({
            ...addedBlock,
            // attributes: { thumbnail: res?.thumbnail ?? res.original },
            meta: {
              isUploading: false,
            },
          });
          this.editor.render([addedBlock.id]);
        };
        fileReader.readAsDataURL(file);
      }
    });
    //const base64images = await this.options.onUpload(files);
  }
}
