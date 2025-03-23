import cn from 'classnames';
import { PlanCard } from '../PlanCard';
import styles from './PlanCards.module.scss';

interface PlanCardsProps {
  className?: string;
}

export function PlanCards({ className }: Readonly<PlanCardsProps>) {
  return (
    <div className={cn(styles.PlanCards, className)}>
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
    </div>
  );
}
