import cn from 'classnames';
import { Content, ElementAccentText, ElementSectionTitle } from '@/shared/ui';
import { AdvantagesCards } from './AdvantagesCards';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  return (
    <section className={cn(styles.Advantages, className)}>
      <Content className={styles.Advantages__Content}>
        <ElementSectionTitle className={styles.Advantages__Title}>
          Завалим ваш отдел продаж <ElementAccentText>целевыми&nbsp;Лидами</ElementAccentText>
        </ElementSectionTitle>
        <AdvantagesCards />
      </Content>
    </section>
  );
}
