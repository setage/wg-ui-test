import React, { useState } from 'react';
import SelectedItem from './components/SelectedItem/SelectedItem';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Dialog from './components/Dialog/Dialog';

import styles from './App.module.css';
import { IItem } from './types';

function App() {
  const [dialogShown, toggleDialog] = useState(false);
  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);

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
        <p>{`You currently have ${selectedItems.length} selected items`}</p>
        <ButtonGroup>
          {!!selectedItems.length && renderSelectedItems}
        </ButtonGroup>

        <ButtonGroup>
          <button onClick={handleToggleDialog}>Change my choice</button>
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
