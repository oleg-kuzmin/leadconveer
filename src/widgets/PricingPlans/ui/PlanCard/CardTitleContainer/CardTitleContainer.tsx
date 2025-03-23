import cn from 'classnames';
import styles from './CardTitleContainer.module.scss';

interface CardTitleContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitleContainer({ children, className }: Readonly<CardTitleContainerProps>) {
  return <div className={cn(styles.CardTitleContainer, className)}>{children}</div>;
}
