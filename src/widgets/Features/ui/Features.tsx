import cn from 'classnames';
import { Content, ElementAccentText, ElementSectionSubtitle, ElementSectionTitle } from '@/shared/ui';
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
        <ElementSectionTitle className={styles.Features__Title}>
          Почему лучше <ElementAccentText>заказать&nbsp;Лидов&nbsp;у&nbsp;нас</ElementAccentText>
        </ElementSectionTitle>
        <ElementSectionSubtitle className={styles.Features__Subtitle}>
          Лидогенерация — это стабильное получение клиентов и выполнение плана по продажам!
        </ElementSectionSubtitle>
        <FeaturesBigCards className={styles.Features__BigCards} />
        <FeaturesSmallCards />
      </Content>
    </section>
  );
}
