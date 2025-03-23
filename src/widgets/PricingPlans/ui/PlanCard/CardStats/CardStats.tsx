import cn from 'classnames';
import { theme } from '@/shared/lib/types';
import { CardStat } from './CardStat';
import styles from './CardStats.module.scss';

interface CardStatsProps {
  stats: string[];
  theme: theme;
  className?: string;
}

export function CardStats({ stats, theme, className }: Readonly<CardStatsProps>) {
  const statElements = stats.map((stat, index) => {
    return (
      <CardStat key={stat} theme={theme} bold={index === 1}>
        {stat}
      </CardStat>
    );
  });

  return <div className={cn(styles.CardStats, className)}>{statElements}</div>;
}
