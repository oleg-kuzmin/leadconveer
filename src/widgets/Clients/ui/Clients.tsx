import cn from 'classnames';
import { Content, ElementAccentText, ElementSectionSubtitle, ElementSectionTitle } from '@/shared/ui';
import { ClientCards } from './ClientCards';
import styles from './Clients.module.scss';

interface ClientsProps {
  className?: string;
}

export function Clients({ className }: Readonly<ClientsProps>) {
  return (
    <section className={cn(styles.Clients, className)}>
      <Content className={styles.Clients__Content}>
        <ElementSectionTitle className={styles.Clients__Title}>
          Клиенты, которые уже покупают <ElementAccentText>Лидов для своего бизнеса</ElementAccentText>
        </ElementSectionTitle>
        <ElementSectionSubtitle className={styles.Clients__Subtitle}>
          Более 5000 компаний по всей России уже используют покупку Лидов!
        </ElementSectionSubtitle>
        <ClientCards />
      </Content>
    </section>
  );
}
