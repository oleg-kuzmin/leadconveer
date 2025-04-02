import cn from 'classnames';
import { FeatureSmallCard } from './FeatureSmallCard';
import styles from './FeaturesSmallCards.module.scss';

interface FeaturesSmallCardsProps {
  className?: string;
}

export function FeaturesSmallCards({ className }: Readonly<FeaturesSmallCardsProps>) {
  return (
    <ul className={cn(styles.FeaturesSmallCards, className)}>
      <FeatureSmallCard
        title="Источник Лидов:"
        text="контекстная реклама в Яндекс.Директ, SEO, SMM и другая реклама дополняют технологию «Лид Конвейер»."
        icon="high-voltage"
      />
      <FeatureSmallCard
        title="Вы экономите на рекламе:"
        text="получая контактные данных тех, кто не оставил заявки, но заинтересован в Вашем товаре или услуге — это дополнительный канал продаж."
        icon="fire"
      />
      <FeatureSmallCard
        title="Вы сможете прогнозировать продажи:"
        text="чтобы не ждать, когда-же кто‑то позвонит или оставит заявку, звоните и продавайте первым!"
        icon="star"
      />
      <FeatureSmallCard
        title="Безопасно:"
        text="это абсолютно легальный и законный метод получения Лидов."
        icon="100"
      />
      <FeatureSmallCard
        title="Быстро:"
        text="запуск и получение первых Лидов обычно занимает 5–7 дней, а добавление проекта в систему менее 1 часа."
        icon="run"
      />
    </ul>
  );
}
