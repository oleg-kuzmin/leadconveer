import cn from 'classnames';
import styles from './AddressElement.module.scss';

interface AddressElementProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function AddressElement({ title, subtitle, className }: Readonly<AddressElementProps>) {
  return (
    <div className={cn(styles.AddressElement, className)}>
      <span className={styles.AddressElement__Title}>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
}
