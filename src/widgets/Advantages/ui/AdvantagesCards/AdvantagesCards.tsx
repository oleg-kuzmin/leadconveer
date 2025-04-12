import cn from 'classnames';
import { AdvantageCard } from '../AdvantageCard';
import styles from './AdvantagesCards.module.scss';

interface AdvantagesCardsProps {
  className?: string;
}

export function AdvantagesCards({ className }: Readonly<AdvantagesCardsProps>) {
  return (
    <div className={cn(styles.AdvantagesCards, className)}>
      <AdvantageCard
        title="Оплата за результат"
        text="Вы платите только за переданные и получение вами целевые Лиды — их контактные данные (телефон, Telegram, email)"
        imgSrc="/leadconveer/images/advantages-smartphone-x1.png"
        imgAlt="Телефон с оплатой картой"
      />
      <AdvantageCard
        title="Качественные лиды"
        text="Все передаваемые вам Лиды — это потенциальные клиенты, которые искали ваш товар или услугу"
        imgSrc="/leadconveer/images/advantages-men-x1.png"
        imgAlt="Мужчина машет рукой"
      />
      <AdvantageCard
        title="Любой объём — на ваш выбор"
        text="Покупайте сколько контактов потенциальных клиентов в месяц — сколько требуется вам!"
        imgSrc="/leadconveer/images/advantages-basket-x1.png"
        imgAlt="Корзина с пакетами скидок"
      />
      <AdvantageCard
        title="Комплекс технологий"
        text="После расчёта стоимости Лидов и оплаты выбранного пакета — вы получите уникальный код для своего сайта, который позволит отслеживать контакты тех, кто не оставил заявкy"
        imgSrc="/leadconveer/images/advantages-laptop-x1.png"
        imgAlt="Ноутбук"
      />
    </div>
  );
}
