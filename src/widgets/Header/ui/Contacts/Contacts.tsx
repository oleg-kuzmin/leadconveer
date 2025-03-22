import cn from 'classnames';
import { ContactLinkElement } from './ContactLinkElement';
import { ContactTelElement } from './ContactTelElement';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: Readonly<ContactsProps>) {
  return (
    <address className={cn(styles.Contacts, className)}>
      <ContactLinkElement href="#" icon="whatsapp" />
      <ContactLinkElement href="#" icon="telegram" />
      <ContactTelElement text="+7 495 118-32-82" />
    </address>
  );
}
