import cn from 'classnames';
import styles from './ContactsAddress.module.scss';

interface ContactsAddressProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactsAddress({ children, className }: Readonly<ContactsAddressProps>) {
  return <address className={cn(styles.ContactsAddress, className)}>{children}</address>;
}
