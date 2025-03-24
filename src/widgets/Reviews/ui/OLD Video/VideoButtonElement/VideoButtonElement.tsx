import cn from 'classnames';
import styles from './VideoButtonElement.module.scss';

interface VideoButtonElementProps {
  icon: 'play' | 'pause';
  onClick: VoidFunction;
  className?: string;
}

export function VideoButtonElement({ icon, onClick, className }: Readonly<VideoButtonElementProps>) {
  let classIcon: string;

  switch (icon) {
    case 'play':
      classIcon = styles.VideoButtonElement_Play;
      break;
    case 'pause':
      classIcon = styles.VideoButtonElement_Pause;
      break;
    default:
      throw Error('VideoButtonElement: unknown icon.');
  }

  return <button className={cn(styles.VideoButtonElement, classIcon, className)} onClick={onClick}></button>;
}
