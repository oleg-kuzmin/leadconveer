import cn from 'classnames';
import { FeaturesBigCard } from './FeaturesBigCard';
import styles from './FeaturesBigCards.module.scss';

interface FeaturesBigCardsProps {
  className?: string;
}

export function FeaturesBigCards({ className }: Readonly<FeaturesBigCardsProps>) {
  return (
    <ul className={cn(styles.FeaturesBigCards, className)}>
      <FeaturesBigCard
        number="01"
        text="Только качественные Лиды. Мы идентифицируем только тех посетителей, которым интересна ваши услуги и из вашего города."
      />
      <FeaturesBigCard
        number="02"
        text="Доступная цена и отсутствие минимального порога. У нас отсутствует минимальная плата за сервис, подписка и т.п. Вы покупаете столько Лидов — сколько хотите!"
      />
      <FeaturesBigCard number="03" text="Техническая поддержка и комплекс услуг. Мы работаем для вас 24/7!" />
    </ul>
  );
}
