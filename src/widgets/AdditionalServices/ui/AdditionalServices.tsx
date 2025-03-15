import cn from 'classnames';
import { SectionTitle } from '@/shared/ui';
import { Card } from './Card';
import styles from './AdditionalServices.module.scss';

interface AdditionalServicesProps {
  className?: string;
}

export function AdditionalServices({ className }: Readonly<AdditionalServicesProps>) {
  return (
    <section className={cn(styles.AdditionalServices, className)}>
      {/* <SectionTitle className={styles.AdditionalServices__Title}>Дополнительные услуги</SectionTitle> */}
      {/* <Card title="Создание промо‑страницы" price="15 000" /> */}
      {/* <Card title="Настройка и ведение Яндекс.Директ" price="10 000" /> */}
    </section>
  );
}
