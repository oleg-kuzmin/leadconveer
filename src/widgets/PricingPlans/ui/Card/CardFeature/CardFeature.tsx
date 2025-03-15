import cn from 'classnames';
import { Tick } from '../Tick';
import styles from './CardFeature.module.scss';

interface CardFeatureProps {
  children: React.ReactNode;
  invert?: boolean;
  bold?: boolean;
  className?: string;
}

export function CardFeature({ children, bold, invert, className }: Readonly<CardFeatureProps>) {
  return (
    <span
      className={cn(
        styles.CardFeature,
        { [styles.CardFeature_Bold]: bold },
        { [styles.CardFeature_Invert]: invert },
        className,
      )}
    >
      {invert ? <Tick icon="white" /> : <Tick icon="black" />}
      {children}
    </span>
  );
}
