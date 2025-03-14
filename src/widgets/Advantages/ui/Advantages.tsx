import cn from 'classnames';
import { AdvatagesTitle } from './AdvatagesTitle';
import { Card } from './Card';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  return (
    <section className={cn(styles.Advantages, className)}>
      {/* <AdvatagesTitle /> */}
      {/* <Card
        title="Оплата за результат"
        text="Вы платите только за переданные и получение вами целевые Лиды — их контактные данные (телефон, Telegram, email)"
        imgSrc="/leadconveer/images/advantages-smartphone-x2.png"
        imgAlt="Телефон с оплатой картой"
        imgWidth={364}
        imgHeight={349}
      />
      <Card
        title="Качественные лиды"
        text="Все передаваемые вам Лиды — это потенциальные клиенты, которые искали ваш товар или услугу"
        imgSrc="/leadconveer/images/advantages-men-x2.png"
        imgAlt="Мужчина машет рукой"
        imgWidth={364}
        imgHeight={349}
      />
      <Card
        title="Любой объём — на ваш выбор"
        text="Покупайте сколько контактов потенциальных клиентов в месяц — сколько требуется вам!"
        imgSrc="/leadconveer/images/advantages-basket-x2.png"
        imgAlt="Корзина с пакетами скидок"
        imgWidth={366}
        imgHeight={349}
      />
      <Card
        title="Комплекс технологий"
        text="После расчёта стоимости Лидов и оплаты выбранного пакета — вы получите уникальный код для своего сайта, который позволит отслеживать контакты тех, кто не оставил заявкy"
        imgSrc="/leadconveer/images/advantages-laptop-x2.png"
        imgAlt="Ноутбук"
        imgWidth={364}
        imgHeight={349}
      /> */}
    </section>
  );
}
