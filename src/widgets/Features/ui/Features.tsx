import cn from 'classnames';
import { AccentText, Content, SectionSubtitle, SectionTitle } from '@/shared/ui';
import { FeaturesBigCards } from './FeaturesBigCards';
import { FeaturesSmallCards } from './FeaturesSmallCards';
import styles from './Features.module.scss';

interface FeaturesProps {
  className?: string;
}

export function Features({ className }: Readonly<FeaturesProps>) {
  return (
    <section className={cn(styles.Features, className)}>
      <Content className={styles.Features__Content}>
        <SectionTitle className={styles.Features__Title}>
          Почему лучше <AccentText>заказать&nbsp;Лидов&nbsp;у&nbsp;нас</AccentText>
        </SectionTitle>
        <SectionSubtitle className={styles.Features__Subtitle}>
          Лидогенерация — это стабильное получение клиентов и выполнение плана по продажам!
        </SectionSubtitle>
        <FeaturesBigCards className={styles.Features__BigCards} />
        <FeaturesSmallCards />
      </Content>
    </section>
  );
}
