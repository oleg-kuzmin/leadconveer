import cn from 'classnames';
import styles from './MainButton.module.scss';

interface MainButtonProps {
  text: React.ReactNode;
  className?: string;
}

export function MainButton({ text, className }: Readonly<MainButtonProps>) {
  return <button className={cn(styles.MainButton, className)}>{text}</button>;
}
