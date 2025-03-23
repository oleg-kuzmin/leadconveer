import cn from 'classnames';
import styles from './StarElement.module.scss';

interface StarElementProps {
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

export function StarElement({ icon, className }: Readonly<StarElementProps>) {
  let classIcon: string;

  switch (icon) {
    case 'hero1':
      classIcon = styles.StarElement_Hero1;
      break;
    case 'hero2':
      classIcon = styles.StarElement_Hero2;
      break;
    case 'advantageCard':
      classIcon = styles.StarElement_AdvantageCard;
      break;
    case 'pricingPlanCard':
      classIcon = styles.StarElement_PricingPlanCard;
      break;
    case 'pricingPlanCardDark':
      classIcon = styles.StarElement_PricingPlanCardDark;
      break;
    case 'additionalServiceCard':
      classIcon = styles.StarElement_AdditionalServiceCard;
      break;
    case 'reviewCard':
      classIcon = styles.StarElement_ReviewCard;
      break;
    case 'technology1':
      classIcon = styles.StarElement_Technology1;
      break;
    case 'technology2':
      classIcon = styles.StarElement_Technology2;
      break;
    case 'registrationFirst':
      classIcon = styles.StarElement_RegistrationFirst;
      break;
    case 'featureCard':
      classIcon = styles.StarElement_FeatureCard;
      break;
    case 'registrationSecond1':
      classIcon = styles.StarElement_RegistrationSecond1;
      break;
    case 'registrationSecond2':
      classIcon = styles.StarElement_RegistrationSecond2;
      break;
    case 'newEra':
      classIcon = styles.StarElement_NewEra;
      break;
    default:
      throw Error('StarElement: unknown icon.');
  }

  return <div className={cn(styles.StarElement, classIcon, className)}></div>;
}
