import cn from 'classnames';
import { ElementContactLink } from '../ElementContactLink';
import { ElementContactTel } from '../ElementContactTel';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: Readonly<ContactsProps>) {
  return (
    <address className={cn(styles.Contacts, className)}>
      <ElementContactLink href="#" icon="whatsapp" />
      <ElementContactLink href="#" icon="telegram" />
      <ElementContactTel text="+7 495 118-32-82" />
    </address>
  );
}
