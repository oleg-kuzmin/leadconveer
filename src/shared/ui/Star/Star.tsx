import cn from 'classnames';
import styles from './Star.module.scss';

interface StarProps {
  icon: '1' | '1-black' | '1-white' | '2' | '4' | '5';
  className?: string;
}

export function Star({ icon, className }: Readonly<StarProps>) {
  let classIcon: string;

  switch (icon) {
    case '1':
      classIcon = styles.Star_Icon_1;
      break;
    case '1-black':
      classIcon = styles.Star_Icon_1Black;
      break;
    case '1-white':
      classIcon = styles.Star_Icon_1White;
      break;
    case '2':
      classIcon = styles.Star_Icon_2;
      break;
    case '4':
      classIcon = styles.Star_Icon_4;
      break;
    case '5':
      classIcon = styles.Star_Icon_5;
      break;
    default:
      classIcon = '';
      break;
  }

  return <div className={cn(styles.Star, classIcon, className)}></div>;
}
