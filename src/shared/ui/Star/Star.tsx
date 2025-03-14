import cn from 'classnames';
import styles from './Star.module.scss';

interface StarProps {
  icon: '1' | '2';
  className?: string;
}

export function Star({ icon, className }: Readonly<StarProps>) {
  let classIcon: string;

  switch (icon) {
    case '1':
      classIcon = styles.Star_Icon_1;
      break;
    case '2':
      classIcon = styles.Star_Icon_2;
      break;
    default:
      classIcon = '';
      break;
  }

  return <div className={cn(styles.Star, classIcon, className)}></div>;
}
