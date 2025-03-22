import { AdditionalServices } from '@/widgets/AdditionalServices';
import { Advantages } from '@/widgets/Advantages';
import { Clients } from '@/widgets/Clients';
import { Contacts } from '@/widgets/Contacts';
import { Faq } from '@/widgets/Faq';
import { Features } from '@/widgets/Features';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Hero } from '@/widgets/Hero';
import { HowItWorks } from '@/widgets/HowItWorks';
import { LeadTechnology } from '@/widgets/LeadTechnology';
import { NewEra } from '@/widgets/NewEra';
import { PricingPlans } from '@/widgets/PricingPlans';
import { RegistrationFirst } from '@/widgets/RegistrationFirst';
import { RegistrationSecond } from '@/widgets/RegistrationSecond';
import { Reviews } from '@/widgets/Reviews';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero className={styles.HomePage__Hero} />
        {/* <Advantages /> */}
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
