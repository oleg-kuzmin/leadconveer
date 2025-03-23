import cn from 'classnames';
import { AccentTextElement, Content, SectionSubtitleElement, SectionTitleElement } from '@/shared/ui';
import { PlanCard } from './PlanCard';
import { PricingPlansCards } from './PricingPlansCards';
import styles from './PricingPlans.module.scss';

interface PricingPlansProps {
  className?: string;
}

export function PricingPlans({ className }: Readonly<PricingPlansProps>) {
  return (
    <section className={cn(styles.PricingPlans, className)}>
      <Content className={styles.PricingPlans__Content}>
        <SectionTitleElement className={styles.PricingPlans__Title}>
          Стоимость технологий <AccentTextElement>«Лид&nbsp;Конвейер»</AccentTextElement>
        </SectionTitleElement>
        <SectionSubtitleElement className={styles.PricingPlans__Subtitle}>
          Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего сайта, без переплаты и абонентской
          платы
        </SectionSubtitleElement>
        <PricingPlansCards>
          <PlanCard
            name="Старт"
            title="50 готовых лидов"
            price="22 500"
            theme="light"
            description="Стартовый пакет для тех, кто хочет купить Лидов со своего сайта и повысить свои продажи"
            stats={['50 Лидов', '450 ₽ за один Лид', 'Получение за 5–7 дней']}
          />
          <PlanCard
            name="Стандарт"
            title="100 готовых лидов"
            price="40 000"
            theme="dark"
            description="Оптимальный пакет Лидов для любого отдела продаж и для повышения продаж своих товаров или услуг"
            stats={[
              '100 Лидов',
              '400 ₽ за один Лид',
              'Получение за 7–14 дней',
              'Возможность показа Лидам рекламы через Яндекс.Директ',
            ]}
          />
          <PlanCard
            name="Премиум"
            title="300 готовых лидов"
            price="90 000"
            theme="light"
            description="Максимум целевых Лидов в ближайшее время для вашего бизнеса которые уже завтра могут стать Вашими клиентами!"
            stats={[
              '300 Лидов',
              '300 ₽ за один Лид',
              'Получение за 14–30 дней',
              'Возможность показа Лидам рекламы через Яндекс.Директ',
              'Готовый и конверсионный скрипт продаж целевым Лидам',
            ]}
          />
        </PricingPlansCards>
      </Content>
    </section>
  );
}
