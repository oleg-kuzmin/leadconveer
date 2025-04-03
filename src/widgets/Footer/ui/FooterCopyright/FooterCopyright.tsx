import cn from 'classnames';
import styles from './FooterCopyright.module.scss';

interface FooterCopyrightProps {
  className?: string;
}

export function FooterCopyright({ className }: Readonly<FooterCopyrightProps>) {
  return (
    <p className={cn(styles.FooterCopyright, className)}>
      &copy; 2025 Все права защищены. Технология «Лид Конвейер» - лидогенерация для бизнеса.
    </p>
  );
}
