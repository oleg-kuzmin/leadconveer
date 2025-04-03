import cn from 'classnames';
import styles from './DescriptionButtonMore.module.scss';

interface DescriptionButtonMoreProps {
  onClick: VoidFunction;
  text: string;
  className?: string;
}

export function DescriptionButtonMore({ text, onClick, className }: Readonly<DescriptionButtonMoreProps>) {
  return (
    <button className={cn(styles.DescriptionButtonMore, className)} onClick={onClick}>
      {text}
    </button>
  );
}
