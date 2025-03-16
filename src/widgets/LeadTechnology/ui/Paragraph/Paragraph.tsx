import cn from 'classnames';
import styles from './Paragraph.module.scss';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className }: Readonly<ParagraphProps>) {
  return <p className={cn(styles.Paragraph, className)}>{children}</p>;
}
