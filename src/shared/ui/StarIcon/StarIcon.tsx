import cn from 'classnames';
import styles from './StarIcon.module.scss';

interface StarIconProps {
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

export function StarIcon({ icon, className }: Readonly<StarIconProps>) {
  let classIcon: string;

  switch (icon) {
    case 'hero1':
      classIcon = styles.StarIcon_Hero1;
      break;
    case 'hero2':
      classIcon = styles.StarIcon_Hero2;
      break;
    case 'advantageCard':
      classIcon = styles.StarIcon_AdvantageCard;
      break;
    case 'pricingPlanCard':
      classIcon = styles.StarIcon_PricingPlanCard;
      break;
    case 'pricingPlanCardDark':
      classIcon = styles.StarIcon_PricingPlanCardDark;
      break;
    case 'additionalServiceCard':
      classIcon = styles.StarIcon_AdditionalServiceCard;
      break;
    case 'reviewCard':
      classIcon = styles.StarIcon_ReviewCard;
      break;
    case 'technology1':
      classIcon = styles.StarIcon_Technology1;
      break;
    case 'technology2':
      classIcon = styles.StarIcon_Technology2;
      break;
    case 'registrationFirst':
      classIcon = styles.StarIcon_RegistrationFirst;
      break;
    case 'featureCard':
      classIcon = styles.StarIcon_FeatureCard;
      break;
    case 'registrationSecond1':
      classIcon = styles.StarIcon_RegistrationSecond1;
      break;
    case 'registrationSecond2':
      classIcon = styles.StarIcon_RegistrationSecond2;
      break;
    case 'newEra':
      classIcon = styles.StarIcon_NewEra;
      break;
    default:
      throw Error('StarIcon: unknown icon.');
  }

  return <div className={cn(styles.StarIcon, classIcon, className)}></div>;
}
