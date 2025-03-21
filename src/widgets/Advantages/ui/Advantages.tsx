import cn from 'classnames';
import { Content, SectionTitle } from '@/shared/ui';
import { AdvantageCard } from './AdvantageCard';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  return (
    <section className={cn(styles.Advantages, className)}>
      <Content className={styles.Advantages__Content}>
        <SectionTitle className={styles.Advantages__Title}>
          Завалим ваш отдел продаж <span className="accent-color">целевыми&nbsp;Лидами</span>
        </SectionTitle>
        <div className={styles.Advantages__Cards}>
          <AdvantageCard
            title="Оплата за результат"
            text="Вы платите только за переданные и получение вами целевые Лиды — их контактные данные (телефон, Telegram, email)"
            imgSrc="/leadconveer/images/advantages-smartphone-x2.png"
            imgAlt="Телефон с оплатой картой"
          />
          <AdvantageCard
            title="Качественные лиды"
            text="Все передаваемые вам Лиды — это потенциальные клиенты, которые искали ваш товар или услугу"
            imgSrc="/leadconveer/images/advantages-men-x2.png"
            imgAlt="Мужчина машет рукой"
          />
          <AdvantageCard
            title="Любой объём — на ваш выбор"
            text="Покупайте сколько контактов потенциальных клиентов в месяц — сколько требуется вам!"
            imgSrc="/leadconveer/images/advantages-basket-x2.png"
            imgAlt="Корзина с пакетами скидок"
          />
          <AdvantageCard
            title="Комплекс технологий"
            text="После расчёта стоимости Лидов и оплаты выбранного пакета — вы получите уникальный код для своего сайта, который позволит отслеживать контакты тех, кто не оставил заявкy"
            imgSrc="/leadconveer/images/advantages-laptop-x2.png"
            imgAlt="Ноутбук"
          />
        </div>
      </Content>
    </section>
  );
}
