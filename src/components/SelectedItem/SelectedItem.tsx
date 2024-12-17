import styles from './SelectedItem.module.css';

interface ISelectedItem {
  name: string;
}


function SelectedItem({ name }: ISelectedItem) {
  return (
    <div className={styles.base}>{name} <span className={styles.close}>&times;</span></div>
  )
};

export default SelectedItem;