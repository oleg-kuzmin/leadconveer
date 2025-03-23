import cn from 'classnames';
import styles from './ElementMainButton.module.scss';

interface ElementMainButtonProps {
  text: React.ReactNode;
  className?: string;
}

export function ElementMainButton({ text, className }: Readonly<ElementMainButtonProps>) {
  return <button className={cn(styles.ElementMainButton, className)}>{text}</button>;
}
