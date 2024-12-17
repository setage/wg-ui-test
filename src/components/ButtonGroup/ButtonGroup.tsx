import styles from './ButtonGroup.module.css';

function ButtonGroup({ children }: { children: React.ReactNode}) {
  return (
    <div className={styles.base}>{children}</div>
  )
}

export default ButtonGroup;