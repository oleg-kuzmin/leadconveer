import { Advantages } from '@/widgets/Advantages';
import { Header } from '@/widgets/Header';
import { Hero } from '@/widgets/Hero';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero className={styles.HomePage__Hero} />
        <Advantages className={styles.HomePage__Advantages} />
      </main>
      {/* <PricingPlans /> */}
      {/* <AdditionalServices /> */}
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
