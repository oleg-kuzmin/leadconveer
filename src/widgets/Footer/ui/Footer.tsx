import cn from 'classnames';
import { Content } from '@/shared/ui';
import { FooterCopyright } from './FooterCopyright';
import { FooterNavigation } from './FooterNavigation';
import { FooterPerson } from './FooterPerson';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: Readonly<FooterProps>) {
  return (
    <footer className={cn(styles.Footer, className)}>
      <Content>
        <FooterCopyright className={styles.Footer__Copyright} />
        <FooterPerson className={styles.Footer__Person} />
        <FooterNavigation className={styles.Footer__Navigation} />
      </Content>
    </footer>
  );
}
