import { FormEvent, useState } from 'react';
import { IItem } from '../../types';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import SelectedItem from '../SelectedItem/SelectedItem';

import styles from './Dialog.module.css';
import { ELEMENTS_LIST } from '../../constants';

interface IDialogProps {
  toggle: () => void;
  save: (items: IItem[]) => void;
  selectedItems: IItem[];
}

function Dialog({ toggle, save, selectedItems }: IDialogProps) {
  const [currentlySelectedItems, setCurrentlySelectedItems] =
    useState<IItem[]>(selectedItems);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    save(currentlySelectedItems);
  };

  const addItem = (item: IItem) => {
    currentlySelectedItems.push(item);
    setCurrentlySelectedItems([...currentlySelectedItems]);
  };

  const removeItem = (item: IItem) => {
    setCurrentlySelectedItems(
      currentlySelectedItems.filter(
        (selectedItem) => selectedItem.value !== item.value
      )
    );
  };

  const renderItems = ELEMENTS_LIST.map((item) => {
    const isChecked = !!currentlySelectedItems.find(
      (selectedItem) => selectedItem.value === item.value
    );

    return (
      <div className={styles.item} key={`element-${item.value}`}>
        <input
          type="checkbox"
          name={`element-${item.value}`}
          id={`element-${item.value}`}
          value={item.value}
          checked={isChecked}
          onChange={isChecked ? () => removeItem(item) : () => addItem(item)}
        />{' '}
        <label htmlFor={`element-${item.value}`}>{item.name}</label>
      </div>
    );
  });

  const renderSelectedItems = currentlySelectedItems.map((item) => (
    <SelectedItem
      key={item.value}
      name={item.name}
      remove={() => removeItem(item)}
    />
  ));

  return (
    <form>
      <div>
        <h1>Select items</h1>
        <button onClick={toggle}>x</button>
      </div>

      <div>
        <div>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" name="search" />
        </div>
        <div>
          <label htmlFor="filter">Filter</label>
          <select id="filter" name="filter">
            <option value="">No filter</option>
            <option value="10">{'>10'}</option>
            <option value="100">{'>100'}</option>
            <option value="200">{'>200'}</option>
          </select>
        </div>
      </div>

      <div className={styles.list}>{renderItems}</div>

      <p>Currently selected items:</p>
      <ButtonGroup>{renderSelectedItems}</ButtonGroup>

      <ButtonGroup>
        <button type="submit" onClick={handleSave}>
          Save
        </button>
        <button type="reset" onClick={toggle}>
          Cancel
        </button>
      </ButtonGroup>
    </form>
  );
}

export default Dialog;
