import React from 'react';
import SelectedItem from "./components/SelectedItem/SelectedItem";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Dialog from "./components/Dialog/Dialog";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.base}>
      <h1>Select items</h1>
      <div>
        <p>You currently have 2 selected items</p>
        <ButtonGroup>
          <SelectedItem name="Element 5" />
          <SelectedItem name="Element 51" />
        </ButtonGroup>

        <ButtonGroup>
          <button>Change my choice</button>
        </ButtonGroup>
      </div>

      {/* <Dialog /> */}
    </div>
  );
}

export default App;
