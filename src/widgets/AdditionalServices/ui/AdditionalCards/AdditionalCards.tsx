import cn from 'classnames';
import styles from './AdditionalCards.module.scss';

interface AdditionalCardsProps {
  children: React.ReactNode;
  className?: string;
}

export function AdditionalCards({ children, className }: Readonly<AdditionalCardsProps>) {
  return <div className={cn(styles.AdditionalCards, className)}>{children}</div>;
}
