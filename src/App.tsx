import React, { useState } from 'react';

import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Dialog from './components/Dialog/Dialog';
import SelectedItem from './components/SelectedItem/SelectedItem';

import { IItem } from './types';

import styles from './App.module.css';

function App() {
  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);
  const [dialogShown, toggleDialog] = useState(false);

  const handleToggleDialog = () => {
    toggleDialog(!dialogShown);
  };

  const handleSave = (items: IItem[]) => {
    setSelectedItems(items);
    handleToggleDialog();
  };

  const removeItem = (item: IItem) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem.value !== item.value)
    );
  };

  const renderSelectedItems = selectedItems.map((item) => (
    <SelectedItem
      key={item.value}
      name={item.name}
      remove={() => removeItem(item)}
    />
  ));

  return (
    <div className={styles.base}>
      <h1>Select items</h1>
      <div>
        <p>{`You currently have ${selectedItems.length} selected ${
          selectedItems.length === 1 ? 'item' : 'items'
        }`}</p>
        <ButtonGroup>
          {!!selectedItems.length && renderSelectedItems}
        </ButtonGroup>

        <ButtonGroup>
          <Button handleClick={handleToggleDialog}>Change my choice</Button>
        </ButtonGroup>
      </div>

      {dialogShown && (
        <Dialog
          toggle={handleToggleDialog}
          save={handleSave}
          selectedItems={selectedItems}
        />
      )}
    </div>
  );
}

export default App;
