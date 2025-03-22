import cn from 'classnames';
import styles from './NavLinkElement.module.scss';

interface NavLinkElementProps {
  href: string;
  text: string;
  className?: string;
}

export function NavLinkElement({ href, text, className }: Readonly<NavLinkElementProps>) {
  return (
    <a className={cn(styles.NavLinkElement, className)} href={href}>
      {text}
    </a>
  );
}
