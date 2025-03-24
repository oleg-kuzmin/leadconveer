import cn from 'classnames';
import styles from './ElementVideoCaption.module.scss';

interface ElementVideoCaptionProps {
  children: React.ReactNode;
  className?: string;
}

export function ElementVideoCaption({ children, className }: Readonly<ElementVideoCaptionProps>) {
  return <div className={cn(styles.ElementVideoCaption, className)}>{children}</div>;
}
