import cn from 'classnames';
import { Content, MainButton, SectionTitle } from '@/shared/ui';
import { ElementBgImage } from './ElementBgImage';
import styles from './RegistrationSecond.module.scss';

interface RegistrationSecondProps {
  className?: string;
}

export function RegistrationSecond({ className }: Readonly<RegistrationSecondProps>) {
  return (
    <section className={cn(styles.RegistrationSecond, className)}>
      <Content>
        <div className={styles.RegistrationSecond__Container}>
          <ElementBgImage className={styles.RegistrationSecond__BgImage} />
          <div className={styles.RegistrationSecond__Text}>
            <SectionTitle className={styles.RegistrationSecond__SectionTitle}>
              Давайте принесём результат Вашему бизнесу? Завалите своей отдел продаж Лидами!
            </SectionTitle>
            <MainButton className={styles.RegistrationSecond__MainButton} text="Зарегистрироваться" />
          </div>
        </div>
      </Content>
    </section>
  );
}
