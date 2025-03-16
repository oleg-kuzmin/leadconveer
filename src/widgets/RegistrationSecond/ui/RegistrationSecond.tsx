import { MainButton, SectionTitle } from '@/shared/ui';
import { BackgroundImage } from './BackgroundImage';
import { Content } from './Content';
import styles from './RegistrationSecond.module.scss';

interface RegistrationSecondProps {
  className?: string;
}

export function RegistrationSecond({ className }: Readonly<RegistrationSecondProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div></div>
    // <section className={styles.RegistrationSecond + externalClass}>
    //   <BackgroundImage />
    //   <Content>
    //     <SectionTitle className={styles.RegistrationSecond__SectionTitle}>
    //       Давайте принесём результат Вашему бизнесу? Завалите своей отдел продаж Лидами!
    //     </SectionTitle>
    //     <MainButton text="Зарегистрироваться" />
    //   </Content>
    // </section>
  );
}
