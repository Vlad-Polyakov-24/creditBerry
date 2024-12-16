import type { CSSProperties } from 'react';

export enum ITermType {
	TITLE = 'title',
  PARAGRAPH = 'paragraph',
  LIST = 'list',
}

export interface ITerm {
  type: ITermType;
  content?: string;
	items?: string[];
	styles?: CSSProperties;
}