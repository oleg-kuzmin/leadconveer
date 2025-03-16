import { MainButton, SectionTitle } from '@/shared/ui';
import { BackgroundImage } from './BackgroundImage';
import { Content } from './Content';
import styles from './RegistrationFirst.module.scss';

interface RegistrationFirstProps {
  className?: string;
}

export function RegistrationFirst({ className }: Readonly<RegistrationFirstProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div></div>
    // <section className={styles.RegistrationFirst + externalClass}>
    //   <Content>
    //     <SectionTitle className={styles.RegistrationFirst__SectionTitle}>
    //       Зарегистрируйтесь и добавьте свой проект в систему — начните получать Лидов сегодня!
    //     </SectionTitle>
    //     <MainButton text="Зарегистрироваться" />
    //   </Content>
    //   <BackgroundImage />
    // </section>
  );
}
