import cn from 'classnames';
import { ContactLink } from './ContactLink';
import { ContactTel } from './ContactTel';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: Readonly<ContactsProps>) {
  return (
    <address className={cn(styles.Contacts, className)}>
      <ContactLink href="#" icon="whatsapp" />
      <ContactLink href="#" icon="telegram" />
      <ContactTel text="+7 495 118-32-82" />
    </address>
  );
}
