import cn from 'classnames';
import styles from './ImageContainer.module.scss';

interface ImageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ImageContainer({ children, className }: Readonly<ImageContainerProps>) {
  return <div className={cn(styles.ImageContainer, className)}>{children}</div>;
}
