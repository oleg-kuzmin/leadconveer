import cn from 'classnames';
import { theme } from '../../PlanCard';
import { StatTextElement } from './StatTextElement';
import { TickElement } from './TickElement';
import styles from './CardStat.module.scss';

interface CardStatProps {
  theme: theme;
  children: React.ReactNode;
  bold?: boolean;
  className?: string;
}

export function CardStat({ theme, children, bold = false, className }: Readonly<CardStatProps>) {
  return (
    <p className={cn(styles.CardStat, className)}>
      <TickElement theme={theme} />
      <StatTextElement theme={theme} bold={bold}>
        {children}
      </StatTextElement>
    </p>
  );
}
