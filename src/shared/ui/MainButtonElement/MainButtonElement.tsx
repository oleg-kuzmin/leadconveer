import cn from 'classnames';
import styles from './MainButtonElement.module.scss';

interface MainButtonElementProps {
  text: React.ReactNode;
  className?: string;
}

export function MainButtonElement({ text, className }: Readonly<MainButtonElementProps>) {
  return <button className={cn(styles.MainButtonElement, className)}>{text}</button>;
}
