import cn from 'classnames';
import styles from './ContactTel.module.scss';

interface ContactTelProps {
  text: string;
  className?: string;
}

export function ContactTel({ text, className }: Readonly<ContactTelProps>) {
  return <span className={cn(styles.ContactTel, className)}>{text}</span>;
}
