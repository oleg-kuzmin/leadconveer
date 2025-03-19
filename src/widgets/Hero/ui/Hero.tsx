import cn from 'classnames';
import { Content, MainButton, Star } from '@/shared/ui';
import { HeroImage } from './HeroImage';
import { HeroPrice } from './HeroPrice';
import { HeroTabs } from './HeroTabs';
import { HeroTitle } from './HeroTitle';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.Hero, className)}>
      <Content className={styles.Hero__Content}>
        <div className={styles.Hero__ImageContainer}>
          <HeroImage />
          <Star className={styles.Hero__Star1} icon="hero1" />
          <Star className={styles.Hero__Star2} icon="hero2" />
        </div>
        <div className={styles.Hero__Text}>
          <HeroTitle className={styles.Hero__Title} />
          <HeroPrice />
          <MainButton className={styles.Hero__Button} text="Выбрать пакет лидов" />
        </div>
      </Content>
      <HeroTabs className={styles.Hero__Tabs} />
    </section>
  );
}
