import cn from 'classnames';
import styles from './ElementContactLink.module.scss';

interface ElementContactLinkProps {
  href: string;
  icon: 'whatsapp' | 'telegram';
  className?: string;
}

export function ElementContactLink({ href, icon, className }: Readonly<ElementContactLinkProps>) {
  let classIcon: string;

  switch (icon) {
    case 'whatsapp':
      classIcon = styles.ElementContactLink_Whatsapp;
      break;
    case 'telegram':
      classIcon = styles.ElementContactLink_Telegram;
      break;
    default:
      throw Error('ElementContactLink: unknown icon.');
  }

  return <a className={cn(styles.ElementContactLink, classIcon, className)} href={href}></a>;
}
