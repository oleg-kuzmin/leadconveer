import cn from 'classnames';
import styles from './ContactsImage.module.scss';

interface ContactsImageProps {
  className?: string;
}

export function ContactsImage({ className }: Readonly<ContactsImageProps>) {
  return <div className={cn(styles.ContactsImage, className)}></div>;
}
