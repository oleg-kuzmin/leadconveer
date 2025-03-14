import cn from 'classnames';
import styles from './Clients.module.scss';

interface ClientsProps {
  className?: string;
}

export function Clients({ className }: Readonly<ClientsProps>) {
  return (
    <div className={cn(styles.Clients, className)}></div>
  );
}