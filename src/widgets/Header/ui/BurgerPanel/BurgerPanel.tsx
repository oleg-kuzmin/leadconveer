import cn from 'classnames';
import styles from './BurgerPanel.module.scss';

interface BurgerPanelProps {
  isActive: boolean;
  className?: string;
}

export function BurgerPanel({ isActive, className }: Readonly<BurgerPanelProps>) {
  return (
    <div className={cn(styles.BurgerPanel, { [styles.BurgerPanel_Active]: isActive }, className)}>
      <ul className={styles.BurgerPanel__List}>
        <li>
          <a className={styles.BurgerPanel__Link} href="#">
            Как это работает
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#">
            Цена
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#">
            Отзывы
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
}
