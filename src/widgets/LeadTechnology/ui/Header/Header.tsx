import cn from 'classnames';
import { SectionTitle } from '@/shared/ui';
import { Smile } from './Smile';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  return (
    <div className={cn(styles.Header, className)}>
      <SectionTitle className={styles.Header__SectionTitle}>
        Технология <span className="accent-color">«Лид&nbsp;Конвейер»</span>
      </SectionTitle>
      <Smile />
    </div>
  );
}
