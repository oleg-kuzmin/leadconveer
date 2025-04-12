import cn from 'classnames';
import { AccentText, Content, SectionSubtitle, SectionTitle } from '@/shared/ui';
import { PlanCards } from './PlanCards';
import styles from './PricingPlans.module.scss';

interface PricingPlansProps {
  className?: string;
}

export function PricingPlans({ className }: Readonly<PricingPlansProps>) {
  return (
    <section className={cn(styles.PricingPlans, className)} id="pricingPlans">
      <Content className={styles.PricingPlans__Content}>
        <SectionTitle className={styles.PricingPlans__Title}>
          Стоимость технологий <AccentText>«Лид&nbsp;Конвейер»</AccentText>
        </SectionTitle>
        <SectionSubtitle className={styles.PricingPlans__Subtitle}>
          Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего сайта, без переплаты и абонентской
          платы
        </SectionSubtitle>
        <PlanCards />
      </Content>
    </section>
  );
}
