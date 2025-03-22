import cn from 'classnames';
import styles from './ContactTelElement.module.scss';

interface ContactTelElementProps {
  text: string;
  className?: string;
}

export function ContactTelElement({ text, className }: Readonly<ContactTelElementProps>) {
  return <span className={cn(styles.ContactTelElement, className)}>{text}</span>;
}
