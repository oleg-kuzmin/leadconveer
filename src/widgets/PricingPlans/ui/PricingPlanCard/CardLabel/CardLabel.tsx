import cn from 'classnames';
import styles from './CardLabel.module.scss';

interface CardLabelProps {
  text: string;
  invert?: boolean;
  className?: string;
}

export function CardLabel({ text, invert = false, className }: Readonly<CardLabelProps>) {
  return <div className={cn(styles.CardLabel, { [styles.CardLabel_Invert]: invert }, className)}>{text}</div>;
}
