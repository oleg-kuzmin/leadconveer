import cn from 'classnames';
import { Content, MainButtonElement, StarElement } from '@/shared/ui';
import { HeroImageElement } from './HeroImageElement';
import { HeroPrice } from './HeroPrice';
import { HeroTabs } from './HeroTabs';
import { HeroText } from './HeroText';
import { HeroTitleElement } from './HeroTitleElement';
import { ImageContainer } from './ImageContainer';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.Hero, className)}>
      <Content className={styles.Hero__Content}>
        <ImageContainer>
          <HeroImageElement className={styles.Hero__Image} />
          <StarElement className={styles.Hero__Star1} icon="hero1" />
          <StarElement className={styles.Hero__Star2} icon="hero2" />
        </ImageContainer>
        <HeroText className={styles.Hero__Text}>
          <HeroTitleElement />
          <HeroPrice />
          <MainButtonElement className={styles.Hero__Button} text="Выбрать пакет лидов" />
        </HeroText>
      </Content>
      <Content>
        <HeroTabs className={styles.Hero__Tabs} />
      </Content>
    </section>
  );
}
