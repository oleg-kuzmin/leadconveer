import cn from 'classnames';
import { Theme } from '@/shared/lib/types';
import { ElementStatText } from '../ElementStatText';
import { ElementTick } from '../ElementTick';
import styles from './CardStat.module.scss';

interface CardStatProps {
  theme: Theme;
  children: React.ReactNode;
  bold?: boolean;
  className?: string;
}

export function CardStat({ theme, children, bold = false, className }: Readonly<CardStatProps>) {
  return (
    <p className={cn(styles.CardStat, className)}>
      <ElementTick theme={theme} />
      <ElementStatText theme={theme} bold={bold}>
        {children}
      </ElementStatText>
    </p>
  );
}
