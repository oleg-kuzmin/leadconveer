import cn from 'classnames';
import { Content, MainButtonElement, StarElement } from '@/shared/ui';
import { HeroImageElement } from './HeroImageElement';
import { HeroSubtitleElement } from './HeroSubtitleElement';
import { HeroTabElement } from './HeroTabElement';
import { HeroTitleElement } from './HeroTitleElement';
import { SmileElement } from './SmileElement';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.Hero, className)}>
      <Content className={styles.Hero__Content}>
        <div className={styles.Hero__ImageContainer}>
          <HeroImageElement className={styles.Hero__Image} />
          <StarElement className={styles.Hero__Star1} icon="hero1" />
          <StarElement className={styles.Hero__Star2} icon="hero2" />
        </div>
        <div className={styles.Hero__Text}>
          <HeroTitleElement />
          <div className={styles.Hero__Price}>
            <HeroSubtitleElement className={styles.Hero__Subtitle} />
            <SmileElement />
          </div>
          <MainButtonElement className={styles.Hero__Button} text="Выбрать пакет лидов" />
        </div>
      </Content>
      <Content className={styles.Hero__Tabs}>
        <div className={styles.Hero__TabsList}>
          <HeroTabElement text="Лидогенерация в b2b" />
          <HeroTabElement text="Биржа лидов" />
          <HeroTabElement text="Сервис по Лидгену" />
          <HeroTabElement text="Лиды для производства" />
          <HeroTabElement text="Клиенты для бизнеса" />
          <HeroTabElement text="Определить телефон посетителя сайта" />
        </div>
      </Content>
    </section>
  );
}
