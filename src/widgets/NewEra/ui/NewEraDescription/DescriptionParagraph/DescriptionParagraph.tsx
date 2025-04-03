import cn from 'classnames';
import styles from './DescriptionParagraph.module.scss';

interface DescriptionParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function DescriptionParagraph({ children, className }: Readonly<DescriptionParagraphProps>) {
  return <p className={cn(styles.DescriptionParagraph, className)}>{children}</p>;
}
