import cn from 'classnames';
import styles from './PresentationVideoIcon.module.scss';

interface PresentationVideoIconProps {
  className?: string;
}

export function PresentationVideoIcon({ className }: Readonly<PresentationVideoIconProps>) {
  return (
    <div className={cn(styles.PresentationVideoIcon, className)}></div>
  );
}