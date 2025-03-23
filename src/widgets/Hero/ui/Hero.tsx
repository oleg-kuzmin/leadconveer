import cn from 'classnames';
import { Content } from '@/shared/ui';
import { ImageContainer } from './ImageContainer';
import { TabList } from './TabList';
import { Text } from './Text';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.Hero, className)}>
      <Content className={styles.Hero__Content}>
        <ImageContainer />
        <Text />
      </Content>
      <Content className={styles.Hero__Tabs}>
        <TabList />
      </Content>
    </section>
  );
}
