import cn from 'classnames';
import styles from './ContactsInfo.module.scss';

interface ContactsInfoProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactsInfo({ children, className }: Readonly<ContactsInfoProps>) {
  return <div className={cn(styles.ContactsInfo, className)}>{children}</div>;
}
