import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { IItem } from '../../types';
import { ELEMENTS_LIST } from '../../constants';

import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import SelectedItem from '../SelectedItem/SelectedItem';

import styles from './Dialog.module.css';

interface IDialogProps {
  toggle: () => void;
  save: (items: IItem[]) => void;
  selectedItems: IItem[];
}

function Dialog({ toggle, save, selectedItems }: IDialogProps) {
  const [availableItems, setAvailableItems] = useState<IItem[]>(ELEMENTS_LIST);
  const [currentlySelectedItems, setCurrentlySelectedItems] =
    useState<IItem[]>(selectedItems);
  const [filterValue, setFilterValue] = useState('');
  const [searchSubstring, setSearchSubstring] = useState('');

  const handleSave = () => {
    save(currentlySelectedItems);
  };

  const addItem = (item: IItem) => {
    if (currentlySelectedItems.length >= 3) return;

    setCurrentlySelectedItems([...currentlySelectedItems, item]);
  };

  const removeItem = (item: IItem) => {
    setCurrentlySelectedItems(
      currentlySelectedItems.filter(
        (selectedItem) => selectedItem.value !== item.value
      )
    );
  };

  useEffect(() => {
    if (!filterValue && !searchSubstring) {
      setAvailableItems(ELEMENTS_LIST);

      return;
    }

    let filteredItems = availableItems;

    if (filterValue) {
      filteredItems = ELEMENTS_LIST.filter(
        (item) => item.value > Number(filterValue)
      );
    }

    if (searchSubstring) {
      const searchScope = filterValue ? filteredItems : ELEMENTS_LIST;

      filteredItems = searchScope.filter((item) =>
        item.name.includes(searchSubstring)
      );
    }

    setAvailableItems(filteredItems);
  }, [searchSubstring, filterValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderItems = availableItems.map((item) => {
    const isChecked = !!currentlySelectedItems.find(
      (selectedItem) => selectedItem.value === item.value
    );

    const isDisabled = currentlySelectedItems.length === 3 && !isChecked;

    const itemClassName = clsx(styles.item, {
      [styles.item_disabled]: isDisabled,
    });

    return (
      <div className={itemClassName} key={`element-${item.value}`}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name={`element-${item.value}`}
          id={`element-${item.value}`}
          value={item.value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={isChecked ? () => removeItem(item) : () => addItem(item)}
        />{' '}
        <label className={styles.label} htmlFor={`element-${item.value}`}>
          {item.name}
        </label>
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
    <div className={styles.base}>
      <div className={styles.overlay} onClick={toggle} />

      <div className={styles.dialog}>
        <div className={styles.header}>
          <h1 className={styles.title}>Select items</h1>
          <button className={styles.close} onClick={toggle}>
            &times;
          </button>
        </div>

        <div className={styles.filters}>
          <div className={styles.filter}>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              name="search"
              onChange={(e) => setSearchSubstring(e.target.value)}
            />
          </div>
          <div className={styles.filter}>
            <label htmlFor="filter">Filter</label>
            <select
              id="filter"
              name="filter"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="">No filter</option>
              <option value="10">{'>10'}</option>
              <option value="100">{'>100'}</option>
              <option value="200">{'>200'}</option>
            </select>
          </div>
        </div>

        <div className={styles.list}>{renderItems}</div>

        {!!currentlySelectedItems.length ? (
          <>
            <p>Currently selected items:</p>
            <ButtonGroup>{renderSelectedItems}</ButtonGroup>
          </>
        ) : (
          <p>No items selected</p>
        )}

        <ButtonGroup>
          <Button color={Button.color.CONFIRM} handleClick={handleSave}>
            Save
          </Button>
          <Button color={Button.color.DECLINE} handleClick={toggle}>
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Dialog;
