import cn from 'classnames';
import styles from './ElementStar.module.scss';

interface ElementStarProps {
  icon:
    | 'hero1'
    | 'hero2'
    | 'advantageCard'
    | 'pricingPlanCard'
    | 'pricingPlanCardDark'
    | 'additionalServiceCard'
    | 'reviewCard'
    | 'technology1'
    | 'technology2'
    | 'registrationFirst'
    | 'featureCard'
    | 'registrationSecond1'
    | 'registrationSecond2'
    | 'newEra';
  className?: string;
}

export function ElementStar({ icon, className }: Readonly<ElementStarProps>) {
  let classIcon: string;

  switch (icon) {
    case 'hero1':
      classIcon = styles.ElementStar_Hero1;
      break;
    case 'hero2':
      classIcon = styles.ElementStar_Hero2;
      break;
    case 'advantageCard':
      classIcon = styles.ElementStar_AdvantageCard;
      break;
    case 'pricingPlanCard':
      classIcon = styles.ElementStar_PricingPlanCard;
      break;
    case 'pricingPlanCardDark':
      classIcon = styles.ElementStar_PricingPlanCardDark;
      break;
    case 'additionalServiceCard':
      classIcon = styles.ElementStar_AdditionalServiceCard;
      break;
    case 'reviewCard':
      classIcon = styles.ElementStar_ReviewCard;
      break;
    case 'technology1':
      classIcon = styles.ElementStar_Technology1;
      break;
    case 'technology2':
      classIcon = styles.ElementStar_Technology2;
      break;
    case 'registrationFirst':
      classIcon = styles.ElementStar_RegistrationFirst;
      break;
    case 'featureCard':
      classIcon = styles.ElementStar_FeatureCard;
      break;
    case 'registrationSecond1':
      classIcon = styles.ElementStar_RegistrationSecond1;
      break;
    case 'registrationSecond2':
      classIcon = styles.ElementStar_RegistrationSecond2;
      break;
    case 'newEra':
      classIcon = styles.ElementStar_NewEra;
      break;
    default:
      throw Error('ElementStar: unknown icon.');
  }

  return <div className={cn(styles.ElementStar, classIcon, className)}></div>;
}
