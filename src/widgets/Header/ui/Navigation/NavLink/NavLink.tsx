import cn from 'classnames';
import styles from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  text: string;
  className?: string;
}

export function NavLink({ href, text, className }: Readonly<NavLinkProps>) {
  return (
    <a className={cn(styles.NavLink, className)} href={href}>
      {text}
    </a>
  );
}
