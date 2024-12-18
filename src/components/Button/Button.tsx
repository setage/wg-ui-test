import clsx from 'clsx';

import styles from './Button.module.css';

enum BUTTON_COLORS {
  CONFIRM = 'confirm',
  DECLINE = 'decline',
}

interface IButtonProps {
  color?: BUTTON_COLORS;
  handleClick: () => void;
  children: React.ReactNode;
}

function Button({
  color = BUTTON_COLORS.CONFIRM,
  handleClick,
  children,
  ...props
}: IButtonProps) {
  const baseClassName = clsx(styles.base, styles[`base_color-${color}`]);

  return (
    <button className={baseClassName} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

Button.color = BUTTON_COLORS;

export default Button;
