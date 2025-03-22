import cn from 'classnames';
import styles from './ButtonBurgerElement.module.scss';

interface ButtonBurgerElementProps {
  isActive: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonBurgerElement({ isActive, onClick, className }: Readonly<ButtonBurgerElementProps>) {
  return (
    <button className={cn(styles.ButtonBurgerElement, className)} onClick={onClick} aria-label="Открыть меню навигации">
      <span
        className={cn(styles.ButtonBurgerElement__Line, { [styles.ButtonBurgerElement__Line_Active]: isActive })}
      ></span>
      <span
        className={cn(styles.ButtonBurgerElement__Line, { [styles.ButtonBurgerElement__Line_Active]: isActive })}
      ></span>
      <span
        className={cn(styles.ButtonBurgerElement__Line, { [styles.ButtonBurgerElement__Line_Active]: isActive })}
      ></span>
    </button>
  );
}
