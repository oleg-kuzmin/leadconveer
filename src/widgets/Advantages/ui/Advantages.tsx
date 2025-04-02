import cn from 'classnames';
import { AccentText, Content, SectionTitle } from '@/shared/ui';
import { AdvantagesCards } from './AdvantagesCards';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  return (
    <section className={cn(styles.Advantages, className)}>
      <Content className={styles.Advantages__Content}>
        <SectionTitle className={styles.Advantages__Title}>
          Завалим ваш отдел продаж <AccentText>целевыми&nbsp;Лидами</AccentText>
        </SectionTitle>
        <AdvantagesCards />
      </Content>
    </section>
  );
}
