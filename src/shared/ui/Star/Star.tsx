import cn from 'classnames';
import styles from './Star.module.scss';

interface StarProps {
  icon:
    | 'hero1'
    | 'hero2'
    | 'advantageCard'
    | 'pricingPlanCard'
    | 'pricingPlanCardInvert'
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

export function Star({ icon, className }: Readonly<StarProps>) {
  let classIcon: string;

  switch (icon) {
    case 'hero1':
      classIcon = styles.Star_Hero1;
      break;
    case 'hero2':
      classIcon = styles.Star_Hero2;
      break;
    case 'advantageCard':
      classIcon = styles.Star_AdvantageCard;
      break;
    case 'pricingPlanCard':
      classIcon = styles.Star_PricingPlanCard;
      break;
    case 'pricingPlanCardInvert':
      classIcon = styles.Star_PricingPlanCardInvert;
      break;
    case 'additionalServiceCard':
      classIcon = styles.Star_AdditionalServiceCard;
      break;
    case 'reviewCard':
      classIcon = styles.Star_ReviewCard;
      break;
    case 'technology1':
      classIcon = styles.Star_Technology1;
      break;
    case 'technology2':
      classIcon = styles.Star_Technology2;
      break;
    case 'registrationFirst':
      classIcon = styles.Star_RegistrationFirst;
      break;
    case 'featureCard':
      classIcon = styles.Star_FeatureCard;
      break;
    case 'registrationSecond1':
      classIcon = styles.Star_RegistrationSecond1;
      break;
    case 'registrationSecond2':
      classIcon = styles.Star_RegistrationSecond2;
      break;
    case 'newEra':
      classIcon = styles.Star_NewEra;
      break;
    default:
      classIcon = '';
      break;
  }

  return <div className={cn(styles.Star, classIcon, className)}></div>;
}
