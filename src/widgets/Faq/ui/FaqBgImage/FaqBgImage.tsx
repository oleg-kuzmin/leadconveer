import cn from 'classnames';
import styles from './FaqBgImage.module.scss';

interface FaqBgImageProps {
  className?: string;
}

export function FaqBgImage({ className }: Readonly<FaqBgImageProps>) {
  return (
    <div className={cn(styles.FaqBgImage, className)}></div>
  );
}