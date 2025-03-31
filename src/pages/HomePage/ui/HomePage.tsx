import { AdditionalServices } from '@/widgets/AdditionalServices';
import { Advantages } from '@/widgets/Advantages';
import { Clients } from '@/widgets/Clients';
import { Header } from '@/widgets/Header';
import { Hero } from '@/widgets/Hero';
import { LeadTechnology } from '@/widgets/LeadTechnology';
import { PricingPlans } from '@/widgets/PricingPlans';
import { RegistrationFirst } from '@/widgets/RegistrationFirst';
import { Reviews } from '@/widgets/Reviews';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero className={styles.HomePage__Hero} />
        <Advantages className={styles.HomePage__Advantages} />
        <PricingPlans className={styles.HomePage__PricingPlans} />
        <AdditionalServices className={styles.HomePage__AdditionalServices} />
        <Clients className={styles.HomePage__Clients} />
        <Reviews className={styles.HomePage__Reviews} />
        <LeadTechnology className={styles.HomePage__LeadTechnology} />
        <RegistrationFirst className={styles.HomePage__RegistrationFirst} />
      </main>
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      {/* <RegistrationSecond /> */}
      {/* <Faq /> */}
      {/* <NewEra /> */}
      {/* <Contacts /> */}
      {/* <Footer /> */}
    </>
  );
}
