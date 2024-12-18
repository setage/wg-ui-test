import styles from './SelectedItem.module.css';

interface ISelectedItem {
  name: string;
  remove: () => void;
}

function SelectedItem({ name, remove }: ISelectedItem) {
  return (
    <div className={styles.base}>
      <span className={styles.name}>{name} </span>
      <span className={styles.close} onClick={remove}>
        &times;
      </span>
    </div>
  );
}

export default SelectedItem;
