import cn from 'classnames';
import styles from './PricingPlansCards.module.scss';

interface PricingPlansCardsProps {
  children: React.ReactNode;
  className?: string;
}

export function PricingPlansCards({ children, className }: Readonly<PricingPlansCardsProps>) {
  return <div className={cn(styles.PricingPlansCards, className)}>{children}</div>;
}
