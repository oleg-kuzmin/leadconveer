import cn from 'classnames';
import styles from './AdvatagesTitle.module.scss';

interface AdvatagesTitleProps {
  className?: string;
}

export function AdvatagesTitle({ className }: Readonly<AdvatagesTitleProps>) {
  return (
    <h2 className={cn(styles.AdvatagesTitle, className)}>
      Завалим ваш отдел продаж <span className="accent-color">целевыми Лидами</span>
    </h2>
  );
}
