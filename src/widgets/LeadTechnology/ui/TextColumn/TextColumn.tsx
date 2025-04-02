import cn from 'classnames';
import { AccentText, SectionTitle } from '@/shared/ui';
import { ElementSmile } from '../ElementSmile';
import { ElementSubtitle } from '../ElementSubtitle';
import styles from './TextColumn.module.scss';

interface TextColumnProps {
  className?: string;
}

export function TextColumn({ className }: Readonly<TextColumnProps>) {
  return (
    <div className={cn(styles.TextColumn, className)}>
      <div className={styles.TextColumn__Header}>
        <SectionTitle className={styles.TextColumn__Title}>
          Технология <AccentText>«Лид&nbsp;Конвейер»</AccentText>
        </SectionTitle>
        <ElementSmile />
      </div>
      <div className={styles.TextColumn__Description}>
        <ElementSubtitle>
          Мы разработали программный комплекс, который позволяет определять контактные данные (телефон, Telegram, email)
          тех посетителей вашего сайта, кто был на сайте, но не оставил заявку.
        </ElementSubtitle>
        <ElementSubtitle>
          Далее, на основе собственных разработок, мы идентифицируем пользователей по интересам и интересующим их
          товарам и услугам — вам передаём только тех, кто заинтересован в вашей услуге или товаре.
        </ElementSubtitle>
        <ElementSubtitle>
          Вы платите только за результат — за полученных Лидов (заявки) на свои услуги или товары.
        </ElementSubtitle>
      </div>
    </div>
  );
}
