import cn from 'classnames';
import styles from './VideoButton.module.scss';

interface VideoButtonProps {
  icon: 'play' | 'pause';
  onClick: VoidFunction;
  className?: string;
}

export function VideoButton({ icon, onClick, className }: Readonly<VideoButtonProps>) {
  let classIcon: string;

  switch (icon) {
    case 'play':
      classIcon = styles.VideoButton_Play;
      break;
    case 'pause':
      classIcon = styles.VideoButton_Pause;
      break;
    default:
      classIcon = '';
      break;
  }

  return <button className={cn(styles.VideoButton, classIcon, className)} onClick={onClick}></button>;
}
