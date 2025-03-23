import { AdditionalServices } from '@/widgets/AdditionalServices';
import { Advantages } from '@/widgets/Advantages';
import { Header } from '@/widgets/Header';
import { Hero } from '@/widgets/Hero';
import { PricingPlans } from '@/widgets/PricingPlans';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero className={styles.HomePage__Hero} />
        <Advantages className={styles.HomePage__Advantages} />
        <PricingPlans className={styles.HomePage__PricingPlans} />
        {/* <AdditionalServices className={styles.HomePage__AdditionalServices} /> */}
      </main>
      {/* <Clients /> */}
      {/* <Reviews /> */}
      {/* <LeadTechnology /> */}
      {/* <RegistrationFirst /> */}
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
