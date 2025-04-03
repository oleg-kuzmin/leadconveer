import cn from 'classnames';
import styles from './ContactsContainer.module.scss';

interface ContactsContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactsContainer({ children, className }: Readonly<ContactsContainerProps>) {
  return <div className={cn(styles.ContactsContainer, className)}>{children}</div>;
}
