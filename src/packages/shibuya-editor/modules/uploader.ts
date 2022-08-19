import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { CaretPosition } from '../types/caret';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    onUpload: (params: {
      original: File;
      base64: string | null;
      isImage: boolean;
    }) => string | null;
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

  upload(files: File[]) {
    //if (!this.options.onUpload || typeof this.options.onUpload !== 'function') return;

    files.forEach((file) => {
      const isImage = !!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp)/i);
      if (isImage) {
        const fileReader = new FileReader();
        fileReader.onload = async (event) => {
          this.editor.getModule('editor').createBlock({
            type: 'IMAGE',
            attributes: { thumbnail: (<FileReader>event.target).result },
          });
          // const imageUrl = await this.options.onUpload({
          //   original: file,
          //   base64: (<FileReader>event.target).result as string,
          //   isImage,
          // });
        };
        fileReader.readAsDataURL(file);
      }
    });
    //const base64images = await this.options.onUpload(files);
  }
}
