import cn from 'classnames';
import styles from './AdvantagesCards.module.scss';

interface AdvantagesCardsProps {
  children: React.ReactNode;
  className?: string;
}

export function AdvantagesCards({ children, className }: Readonly<AdvantagesCardsProps>) {
  return <div className={cn(styles.AdvantagesCards, className)}>{children}</div>;
}
