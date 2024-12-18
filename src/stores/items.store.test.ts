import { ELEMENTS_LIST } from '../constants';
import { ItemsStore } from './items.store';

describe('ItemsStore', () => {
  const itemsStore = new ItemsStore();

  test('initializes with filled items list', () => {
    expect(itemsStore.items).toEqual(ELEMENTS_LIST);
  });

  test('initializes with empty selectedItems list', () => {
    expect(itemsStore.selectedItems).toEqual([]);
  });

  test('saves passed items into selectedItems list', () => {
    itemsStore.save([ELEMENTS_LIST[0], ELEMENTS_LIST[2]]);
    expect(itemsStore.selectedItems[1].value).toBe(2);
  });

  test('removes passed item from the selectedItems list', () => {
    itemsStore.remove(ELEMENTS_LIST[0]);
    expect(itemsStore.selectedItems[0].value).toBe(2);
  });
});
