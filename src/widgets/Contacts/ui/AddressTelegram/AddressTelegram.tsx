import cn from 'classnames';
import { ContactLink } from '@/shared/ui';
import styles from './AddressTelegram.module.scss';

interface AddressTelegramProps {
  title: string;
  className?: string;
}

export function AddressTelegram({ title, className }: Readonly<AddressTelegramProps>) {
  return (
    <div className={cn(styles.AddressTelegram, className)}>
      <span className={styles.AddressTelegram__Title}>{title}</span>
      <ContactLink className={styles.AddressTelegram__Link} icon="telegram" href="#" />
    </div>
  );
}
