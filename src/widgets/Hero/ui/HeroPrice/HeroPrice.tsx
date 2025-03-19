import cn from 'classnames';
import { HeroSubtitle } from './HeroSubtitle';
import { Smile } from './Smile';
import styles from './HeroPrice.module.scss';

interface HeroPriceProps {
  className?: string;
}

export function HeroPrice({ className }: Readonly<HeroPriceProps>) {
  return (
    <div className={cn(styles.HeroPrice, className)}>
      <HeroSubtitle text="Покупайте только целевые лиды по фиксированной цене от 300 ₽" />
      <Smile />
    </div>
  );
}

// по фиксированной
