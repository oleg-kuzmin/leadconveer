import cn from 'classnames';
import styles from './ElementNavLink.module.scss';

interface ElementNavLinkProps {
  href: string;
  text: string;
  className?: string;
}

export function ElementNavLink({ href, text, className }: Readonly<ElementNavLinkProps>) {
  return (
    <a className={cn(styles.ElementNavLink, className)} href={href}>
      {text}
    </a>
  );
}
