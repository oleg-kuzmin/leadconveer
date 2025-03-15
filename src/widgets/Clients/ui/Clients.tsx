import cn from 'classnames';
import { SectionSubtitle, SectionTitle } from '@/shared/ui';
import { ClientCard } from './ClientCard';
import styles from './Clients.module.scss';

interface ClientsProps {
  className?: string;
}

export function Clients({ className }: Readonly<ClientsProps>) {
  return (
    <section className={cn(styles.Clients, className)}>
      {/* <SectionTitle className={styles.Clients__Title}>
        Клиенты, которые уже покупают <span className="accent-color">Лидов для своего бизнеса</span>
      </SectionTitle> */}
      {/* <SectionSubtitle className={styles.Clients__Subtitle}>
        Более 5000 компаний по всей России уже используют покупку Лидов!
      </SectionSubtitle> */}
      {/* <ClientCard
        imgSrc="/leadconveer/images/client-skoda-x2.png"
        imgAlt="Логотип компании Skoda"
        imgWidth={298}
        imgHeight={71}
      />
      <ClientCard
        imgSrc="/leadconveer/images/client-skillbox-x2.png"
        imgAlt="Логотип компании Skillbox"
        imgWidth={234}
        imgHeight={50}
      />
      <ClientCard
        imgSrc="/leadconveer/images/client-worldclass-x2.png"
        imgAlt="Логотип компании WorldClass"
        imgWidth={250}
        imgHeight={71}
      />
      <ClientCard
        imgSrc="/leadconveer/images/client-absolutbank-x2.png"
        imgAlt="Логотип Абсолют Банк"
        imgWidth={230}
        imgHeight={69}
      /> */}
    </section>
  );
}
