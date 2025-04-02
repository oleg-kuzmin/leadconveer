import cn from 'classnames';
import { AccentText, Content, SectionSubtitle, SectionTitle } from '@/shared/ui';
import { ClientCards } from './ClientCards';
import styles from './Clients.module.scss';

interface ClientsProps {
  className?: string;
}

export function Clients({ className }: Readonly<ClientsProps>) {
  return (
    <section className={cn(styles.Clients, className)}>
      <Content className={styles.Clients__Content}>
        <SectionTitle className={styles.Clients__Title}>
          Клиенты, которые уже покупают <AccentText>Лидов для своего бизнеса</AccentText>
        </SectionTitle>
        <SectionSubtitle className={styles.Clients__Subtitle}>
          Более 5000 компаний по всей России уже используют покупку Лидов!
        </SectionSubtitle>
        <ClientCards />
      </Content>
    </section>
  );
}
