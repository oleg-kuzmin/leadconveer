import cn from 'classnames';
import styles from './AdditionalServices.module.scss';

interface AdditionalServicesProps {
  className?: string;
}

export function AdditionalServices({ className }: Readonly<AdditionalServicesProps>) {
  return (
    <div className={cn(styles.AdditionalServices, className)}></div>
  );
}