import { IItem } from './types';

export const ELEMENTS_LIST: IItem[] = Array.from({ length: 300 }, (_, i) => ({
  name: `Element ${i + 1}`,
  value: i,
}));
