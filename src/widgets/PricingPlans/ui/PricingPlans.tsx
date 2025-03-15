import cn from 'classnames';
import { SectionSubtitle, SectionTitle, Star } from '@/shared/ui';
import { PricingPlanCard } from './PricingPlanCard';
import { CardDescription } from './CardDescription';
import { CardHeader } from './CardHeader';
import { CardLabel } from './CardLabel';
import { CardTitle } from './CardTitle';
import { Tick } from './Tick';
import styles from './PricingPlans.module.scss';

interface PricingPlansProps {
  className?: string;
}

export function PricingPlans({ className }: Readonly<PricingPlansProps>) {
  return (
    <section className={cn(styles.PricingPlans, className)}>
      {/* <SectionTitle className={styles.PricingPlans__Title}>
        Стоимость технологий <span className="accent-color">«Лид Конвейер»</span>
      </SectionTitle> */}
      {/* <SectionSubtitle className={styles.PricingPlans__Subtitle}>
        Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего сайта, без переплаты и абонентской платы
      </SectionSubtitle> */}
      {/* <PricingPlanCard
        name="Старт"
        title="50 готовых лидов"
        price="22 500"
        description="Стартовый пакет для тех, кто хочет купить Лидов со своего сайта и повысить свои продажи"
        features={['50 Лидов', '450 ₽ за один Лид', 'Получение за 5–7 дней']}
      /> */}
      {/* <PricingPlanCard
        name="Стандарт"
        title="100 готовых лидов"
        price="40 000"
        description="Оптимальный пакет Лидов для любого отдела продаж и для повышения продаж своих товаров или услуг"
        features={[
          '100 Лидов',
          '400 ₽ за один Лид',
          'Получение за 7–14 дней',
          'Возможность показа Лидам рекламы через Яндекс.Директ',
        ]}
        invert
      /> */}
      {/* <PricingPlanCard
        name="Премиум"
        title="300 готовых лидов"
        price="90 000"
        description="Максимум целевых Лидов в ближайшее время для вашего бизнеса которые уже завтра могут стать Вашими клиентами!"
        features={[
          '300 Лидов',
          '300 ₽ за один Лид',
          'Получение за 14–30 дней',
          'Возможность показа Лидам рекламы через Яндекс.Директ',
          'Готовый и конверсионный скрипт продаж целевым Лидам',
        ]}
      /> */}
    </section>
  );
}
