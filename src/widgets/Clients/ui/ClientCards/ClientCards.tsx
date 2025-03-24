import cn from 'classnames';
import { ClientCard } from '../ClientCard';
import styles from './ClientCards.module.scss';

interface ClientCardsProps {
  className?: string;
}

export function ClientCards({ className }: Readonly<ClientCardsProps>) {
  return (
    <div className={cn(styles.ClientCards, className)}>
      <ClientCard
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
      />
    </div>
  );
}
