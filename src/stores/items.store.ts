import { makeAutoObservable } from 'mobx';

import { IItem } from '../types';
import { ELEMENTS_LIST } from '../constants';

export class ItemsStore {
  public items: IItem[] = ELEMENTS_LIST;
  public selectedItems: IItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public save = (items: IItem[]): void => {
    this.selectedItems = items;
  };

  public remove = (item: IItem): void => {
    this.selectedItems = this.selectedItems.filter(
      (selectedItem) => selectedItem.value !== item.value
    );
  };
}
