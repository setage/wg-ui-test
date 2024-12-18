import React, { useState } from 'react';

import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Dialog from './components/Dialog/Dialog';
import SelectedItem from './components/SelectedItem/SelectedItem';

import styles from './App.module.css';
import { ItemsStore } from './stores/items.store';
import { observer } from 'mobx-react-lite';

const itemsStore = new ItemsStore();

const App = observer(() => {
  const [dialogShown, toggleDialog] = useState(false);

  const { selectedItems, save, remove } = itemsStore;

  const handleToggleDialog = () => {
    toggleDialog(!dialogShown);
  };

  const renderSelectedItems = selectedItems.map((item) => (
    <SelectedItem
      key={item.value}
      name={item.name}
      remove={() => remove(item)}
    />
  ));

  return (
    <div className={styles.base}>
      <h1>Select items</h1>
      <p>{`You currently have ${selectedItems.length} selected ${
        selectedItems.length === 1 ? 'item' : 'items'
      }`}</p>
      <ButtonGroup>{!!selectedItems.length && renderSelectedItems}</ButtonGroup>

      <ButtonGroup>
        <Button handleClick={handleToggleDialog}>Change my choice</Button>
      </ButtonGroup>

      {dialogShown && (
        <Dialog
          toggle={handleToggleDialog}
          save={save}
          selectedItems={selectedItems}
        />
      )}
    </div>
  );
});

export default App;
