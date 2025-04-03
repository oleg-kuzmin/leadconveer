import cn from 'classnames';
import { ContactLink } from '@/shared/ui';
import { ElementContactTel } from '../ElementContactTel';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: Readonly<ContactsProps>) {
  return (
    <address className={cn(styles.Contacts, className)}>
      <ContactLink href="#" icon="whatsapp" />
      <ContactLink href="#" icon="telegram" />
      <ElementContactTel text="+7 495 118-32-82" />
    </address>
  );
}
