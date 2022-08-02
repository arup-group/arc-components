export declare type MarkdownOutput = 'default' | 'html' | 'text';

export const OUTPUT_TYPES: { [key in MarkdownOutput]: MarkdownOutput } = {
  default: 'default',
  html: 'html',
  text: 'text',
};
