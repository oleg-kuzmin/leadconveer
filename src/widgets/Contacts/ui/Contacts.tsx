import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: Readonly<ContactsProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Contacts + externalClass}></div>
  );
}