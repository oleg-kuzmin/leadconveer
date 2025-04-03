import cn from 'classnames';
import styles from './NavElement.module.scss';

interface NavElementProps {
  text: string;
  href: string;
  noBr?: boolean;
  className?: string;
}

export function NavElement({ text, href, noBr = false, className }: Readonly<NavElementProps>) {
  return (
    <li className={cn(styles.NavElement, className)}>
      <a className={styles.NavElement__Link} href={href}>
        {text}
        {!noBr && <span className={styles.NavElement__Br}> |</span>}
      </a>
    </li>
  );
}
