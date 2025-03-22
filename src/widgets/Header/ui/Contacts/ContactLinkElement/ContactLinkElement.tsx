import cn from 'classnames';
import styles from './ContactLinkElement.module.scss';

interface ContactLinkElementProps {
  href: string;
  icon: 'whatsapp' | 'telegram';
  className?: string;
}

export function ContactLinkElement({ href, icon, className }: Readonly<ContactLinkElementProps>) {
  let classIcon: string;

  switch (icon) {
    case 'whatsapp':
      classIcon = styles.ContactLinkElement_Whatsapp;
      break;
    case 'telegram':
      classIcon = styles.ContactLinkElement_Telegram;
      break;
    default:
      throw Error('ContactLinkElement: unknown icon.');
  }

  return <a className={cn(styles.ContactLinkElement, classIcon, className)} href={href}></a>;
}
