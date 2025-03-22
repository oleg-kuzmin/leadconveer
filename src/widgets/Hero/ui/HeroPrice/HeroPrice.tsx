import cn from 'classnames';
import { HeroSubtitleElement } from './HeroSubtitleElement';
import { SmileElement } from './SmileElement';
import styles from './HeroPrice.module.scss';

interface HeroPriceProps {
  className?: string;
}

export function HeroPrice({ className }: Readonly<HeroPriceProps>) {
  return (
    <div className={cn(styles.HeroPrice, className)}>
      <HeroSubtitleElement
        className={styles.HeroPrice__HeroSubtitleElement}
        text="Покупайте только целевые лиды по фиксированной цене от 300 ₽"
      />
      <SmileElement />
    </div>
  );
}
