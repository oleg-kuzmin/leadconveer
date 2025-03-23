import cn from 'classnames';
import { Content, ElementAccentText, ElementSectionSubtitle, ElementSectionTitle } from '@/shared/ui';
import { PlanCards } from './PlanCards';
import styles from './PricingPlans.module.scss';

interface PricingPlansProps {
  className?: string;
}

export function PricingPlans({ className }: Readonly<PricingPlansProps>) {
  return (
    <section className={cn(styles.PricingPlans, className)}>
      <Content className={styles.PricingPlans__Content}>
        <ElementSectionTitle className={styles.PricingPlans__Title}>
          Стоимость технологий <ElementAccentText>«Лид&nbsp;Конвейер»</ElementAccentText>
        </ElementSectionTitle>
        <ElementSectionSubtitle className={styles.PricingPlans__Subtitle}>
          Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего сайта, без переплаты и абонентской
          платы
        </ElementSectionSubtitle>
        <PlanCards />
      </Content>
    </section>
  );
}
