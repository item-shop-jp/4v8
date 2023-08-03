import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { CaretPosition } from '../types/caret';
import { getBlockElementById } from '../utils/block';
import { EventSources } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    onUpload: (params: { original: File; base64: string | null; isImage: boolean }) => {
      original: string;
      thumbnail?: string;
      fileName?: string;
      size?: number;
      attributes?: any;
    } | null;
    onDownload: (files: string[]) => void;
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
          const previewBlock = this.editor.getModule('editor').createBlock({
            prevId: blockId,
            type: 'IMAGE',
            attributes: {
              thumbnail: (<FileReader>event.target).result,
            },
            meta: {
              isUploading: true,
            },
            source: EventSources.SILENT,
            focus: false,
            historyPush: false,
          });

          const res = await this.options.onUpload({
            original: file,
            base64: (<FileReader>event.target).result as string,
            isImage,
          });
          this.editor.deleteBlock(previewBlock.id, EventSources.SILENT);
          this.editor.render();
          if (!res) {
            return;
          }
          setTimeout(() => {
            const addBlock = this.editor.getModule('editor').createBlock({
              prevId: blockId,
              type: 'IMAGE',
              attributes: {
                ...(res.attributes ?? {}),
                thumbnail: res?.thumbnail ?? res.original,
              },
              focus: false,
              historyPush: false,
            });
            // If the last block is an embedded element
            const blocks = this.editor.getBlocks();
            const addIndex = blocks.findIndex((block) => block.id === addBlock.id);
            if (blocks.length > 0 && addIndex === blocks.length - 1) {
              this.editor.getModule('editor').createBlock({
                prevId: addBlock.id,
                type: 'PARAGRAPH',
              });
            }
            setTimeout(() => {
              const el = getBlockElementById(addBlock.id);
              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 20);
          });
        };
        fileReader.readAsDataURL(file);
      } else {
        const fileReader = new FileReader();
        fileReader.onload = async (event) => {
          const previewBlock = this.editor.getModule('editor').createBlock({
            prevId: blockId,
            type: 'FILE',
            attributes: {
              fileName: file.name,
              size: file.size,
            },
            meta: {
              isUploading: true,
            },
            source: EventSources.SILENT,
            focus: false,
            historyPush: false,
          });
          const res = await this.options.onUpload({
            original: file,
            base64: (<FileReader>event.target).result as string,
            isImage,
          });
          this.editor.deleteBlock(previewBlock.id, EventSources.SILENT);
          this.editor.render();
          if (!res) {
            return;
          }
          setTimeout(() => {
            const addBlock = this.editor.getModule('editor').createBlock({
              prevId: blockId,
              type: 'FILE',
              attributes: {
                ...(res.attributes ?? {}),
                fileName: file.name,
                size: file.size,
              },
              focus: false,
              historyPush: false,
            });
            // If the last block is an embedded element
            const blocks = this.editor.getBlocks();
            const addIndex = blocks.findIndex((block) => block.id === addBlock.id);
            if (blocks.length > 0 && addIndex === blocks.length - 1) {
              this.editor.getModule('editor').createBlock({
                prevId: addBlock.id,
                type: 'PARAGRAPH',
              });
            }

            setTimeout(() => {
              const el = getBlockElementById(addBlock.id);
              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 20);
          });
        };
        fileReader.readAsDataURL(file);
      }
    });
  }

  download(files: string[]) {
    if (typeof this.options.onDownload !== 'function') return;
    this.options.onDownload(files);
  }
}
