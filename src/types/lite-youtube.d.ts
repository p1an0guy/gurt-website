import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'lite-youtube': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        playlabel?: string;
        style?: CSSProperties;
        title?: string;
        videoid: string;
      };
    }
  }
}
