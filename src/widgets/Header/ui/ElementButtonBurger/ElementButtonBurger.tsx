import cn from 'classnames';
import styles from './ElementButtonBurger.module.scss';

interface ElementButtonBurgerProps {
  isActive: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function ElementButtonBurger({ isActive, onClick, className }: Readonly<ElementButtonBurgerProps>) {
  return (
    <button className={cn(styles.ElementButtonBurger, className)} onClick={onClick} aria-label="Открыть меню навигации">
      <span
        className={cn(styles.ElementButtonBurger__Line, { [styles.ElementButtonBurger__Line_Active]: isActive })}
      ></span>
      <span
        className={cn(styles.ElementButtonBurger__Line, { [styles.ElementButtonBurger__Line_Active]: isActive })}
      ></span>
      <span
        className={cn(styles.ElementButtonBurger__Line, { [styles.ElementButtonBurger__Line_Active]: isActive })}
      ></span>
    </button>
  );
}
