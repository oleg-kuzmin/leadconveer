import { BackgroundImage } from './BackgroundImage';
import { Content } from './Content';
import { Header } from './Header';
import { Paragraph } from './Paragraph';
import { Text } from './Text';
import styles from './LeadTechnology.module.scss';

interface LeadTechnologyProps {
  className?: string;
}

export function LeadTechnology({ className }: Readonly<LeadTechnologyProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <section className={styles.LeadTechnology + externalClass}>
      <BackgroundImage />
      <Content>
        <Header />
        <Text>
          <Paragraph>
            Мы разработали программный комплекс, который позволяет определять контактные данные (телефон, Telegram,
            email) тех посетителей вашего сайта, кто был на сайте, но не оставил заявку.
          </Paragraph>
          <Paragraph>
            Далее, на основе собственных разработок, мы идентифицируем пользователей по интересам и интересующим их
            товарам и услугам — вам передаём только тех, кто заинтересован в вашей услуге или товаре.
          </Paragraph>
          <Paragraph>
            Вы платите только за результат — за полученных Лидов (заявки) на свои услуги или товары.
          </Paragraph>
        </Text>
      </Content>
    </section>
  );
}
