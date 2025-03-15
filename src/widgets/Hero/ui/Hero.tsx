import cn from 'classnames';
import { MainButton, Star } from '@/shared/ui';
import { HeroImage } from './HeroImage';
import { HeroSubtitle } from './HeroSubtitle';
import { HeroSubtitleContainer } from './HeroSubtitleContainer';
import { HeroTabs } from './HeroTabs';
import { HeroTitle } from './HeroTitle';
import { Smile } from './Smile';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.Hero, className)}>
      {/* <Star icon="hero1" /> */}
      {/* <Star icon="hero2" /> */}
      {/* <HeroImage /> */}
      {/* <HeroTitle /> */}
      {/* <HeroSubtitleContainer /> */}
      {/* <MainButton text="Выбрать пакет лидов" /> */}
      {/* <HeroTabs /> */}
    </section>
  );
}
