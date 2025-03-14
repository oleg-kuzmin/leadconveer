import cn from 'classnames';
import styles from './ContactLink.module.scss';

interface ContactLinkProps {
  href: string;
  icon: 'whatsapp' | 'telegram';
  className?: string;
}

export function ContactLink({ href, icon, className }: Readonly<ContactLinkProps>) {
  let classIcon: string;

  switch (icon) {
    case 'whatsapp':
      classIcon = styles.ContactLink_Whatsapp;
      break;
    case 'telegram':
      classIcon = styles.ContactLink_Telegram;
      break;
    default:
      classIcon = '';
      break;
  }

  return <a className={cn(styles.ContactLink, classIcon, className)} href={href}></a>;
}
