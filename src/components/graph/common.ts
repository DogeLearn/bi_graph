import { CSSProperties } from 'react';

export enum ColorSet {
  '#ca8282',
  '#8884d8',
  '#82ca9d',
  '#d6dd84',
}

export interface GraphProps {
  data: Record<string, any>;
  style?: CSSProperties;
}
