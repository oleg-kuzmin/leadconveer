import cn from 'classnames';
import { Content, SectionSubtitle, SectionTitle } from '@/shared/ui';
import { AddressElement } from './AddressElement';
import { AddressTelegram } from './AddressTelegram';
import { ContactsAddress } from './ContactsAddress';
import { ContactsContainer } from './ContactsContainer';
import { ContactsImage } from './ContactsImage';
import { ContactsInfo } from './ContactsInfo';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

export function Contacts({ className }: Readonly<ContactsProps>) {
  return (
    <section className={cn(styles.Contacts, className)}>
      <Content>
        <ContactsContainer>
          <ContactsInfo>
            <SectionTitle className={styles.Contacts__Title}>Контакты</SectionTitle>
            <SectionSubtitle className={styles.Contacts__Subtitle}>
              Есть вопрос, или вы хотите получить бесплатную консультацию? Свяжитесь с нами, и мы предоставим
              необходимую информацию!
            </SectionSubtitle>
            <ContactsAddress>
              <AddressElement title="Адрес офиса" subtitle="г. Москва, ул. Дубининская, д. 53" />
              <AddressElement title="Телефон:" subtitle="+7 495 118-32-82" />
              <AddressElement title="Электронная почта" subtitle="mailbox@leadconveer.ru" />
              <AddressTelegram title="Или напишите нам в любимом мессенджере:" />
            </ContactsAddress>
          </ContactsInfo>
          <ContactsImage />
        </ContactsContainer>
      </Content>
    </section>
  );
}
