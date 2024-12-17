import { IItem } from './types';

export const ELEMENTS_LIST: IItem[] = Array.from({ length: 300 }, (_, i) => ({
  name: `Element ${i + 1}`,
  value: i,
}));

export const MAX_SELECTED_ITEMS_LENGTH = 3;
