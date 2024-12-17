import { IItem } from '../../types';
import styles from './SelectedItem.module.css';

interface ISelectedItem {
  name: string;
  remove: () => void;
}

function SelectedItem({ name, remove }: ISelectedItem) {
  return (
    <div className={styles.base}>
      {name}{' '}
      <span className={styles.close} onClick={remove}>
        &times;
      </span>
    </div>
  );
}

export default SelectedItem;
