import cn from 'classnames';
import styles from './Tick.module.scss';

interface TickProps {
  icon: 'white' | 'black';
  className?: string;
}

export function Tick({ icon, className }: Readonly<TickProps>) {
  let classIcon: string;

  switch (icon) {
    case 'white':
      classIcon = styles.Tick_White;
      break;
    case 'black':
      classIcon = styles.Tick_Black;
      break;
    default:
      throw Error('Tick: unknown icon.');
  }

  return <span className={cn(styles.Tick, classIcon, className)}>*</span>;
}
