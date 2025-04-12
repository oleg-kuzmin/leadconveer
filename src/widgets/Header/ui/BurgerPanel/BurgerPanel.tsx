import cn from 'classnames';
import styles from './BurgerPanel.module.scss';

interface BurgerPanelProps {
  isActive: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function BurgerPanel({ isActive, onClick, className }: Readonly<BurgerPanelProps>) {
  return (
    <div className={cn(styles.BurgerPanel, { [styles.BurgerPanel_Active]: isActive }, className)}>
      <ul className={styles.BurgerPanel__List}>
        <li>
          <a className={styles.BurgerPanel__Link} href="#howItWorks" onClick={onClick}>
            Как это работает
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#pricingPlans" onClick={onClick}>
            Цена
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#reviews" onClick={onClick}>
            Отзывы
          </a>
        </li>
        <li>
          <a className={styles.BurgerPanel__Link} href="#contacts" onClick={onClick}>
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
}
