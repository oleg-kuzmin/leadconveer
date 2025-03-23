import cn from 'classnames';
import { Content, SectionTitleElement } from '@/shared/ui';
import { AdditionalCard } from './AdditionalCard';
import { AdditionalCards } from './AdditionalCards';
import styles from './AdditionalServices.module.scss';

interface AdditionalServicesProps {
  className?: string;
}

export function AdditionalServices({ className }: Readonly<AdditionalServicesProps>) {
  return (
    <section className={cn(styles.AdditionalServices, className)}>
      <Content>
        <SectionTitleElement className={styles.AdditionalServices__Title}>Дополнительные услуги</SectionTitleElement>
        <AdditionalCards>
          <AdditionalCard title="Создание промо‑страницы" price="15 000" />
          <AdditionalCard title="Настройка и ведение Яндекс.Директ" price="10 000" />
        </AdditionalCards>
      </Content>
    </section>
  );
}
