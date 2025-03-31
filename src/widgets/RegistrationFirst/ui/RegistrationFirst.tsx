import cn from 'classnames';
import { Content, ElementMainButton, ElementSectionTitle } from '@/shared/ui';
import { ElementBgImage } from './ElementBgImage';
import styles from './RegistrationFirst.module.scss';

interface RegistrationFirstProps {
  className?: string;
}

export function RegistrationFirst({ className }: Readonly<RegistrationFirstProps>) {
  return (
    <section className={cn(styles.RegistrationFirst, className)}>
      <Content>
        <div className={styles.RegistrationFirst__Container}>
          <ElementBgImage className={styles.RegistrationFirst__BgImage} />
          <div className={styles.RegistrationFirst__Text}>
            <ElementSectionTitle className={styles.RegistrationFirst__SectionTitle}>
              Зарегистрируйтесь и&nbsp;добавьте свой проект в&nbsp;систему — начните получать Лидов сегодня!
            </ElementSectionTitle>
            <ElementMainButton className={styles.RegistrationFirst__MainButton} text="Зарегистрироваться" />
          </div>
        </div>
      </Content>
    </section>
  );
}
