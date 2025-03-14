import cn from 'classnames';
import styles from './PricingPlans.module.scss';

interface PricingPlansProps {
  className?: string;
}

export function PricingPlans({ className }: Readonly<PricingPlansProps>) {
  return (
    <div className={cn(styles.PricingPlans, className)}></div>
  );
}