import cn from 'classnames';
import { MainButton } from '@/shared/ui';
import { CardDescription } from './CardDescription';
import { CardFeature } from './CardFeature';
import { CardHeader } from './CardHeader';
import { CardPrice } from './CardPrice';
import { CardTitle } from './CardTitle';
import styles from './PricingPlanCard.module.scss';

interface PricingPlanCardProps {
  name: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  invert?: boolean;
  className?: string;
}

export function PricingPlanCard({
  name,
  title,
  price,
  description,
  features,
  invert,
  className,
}: Readonly<PricingPlanCardProps>) {
  const featureElements = features.map((feature, index) => {
    return (
      <CardFeature key={feature} bold={index === 1} invert={invert}>
        {feature}
      </CardFeature>
    );
  });

  return (
    <div className={cn(styles.PricingPlanCard, { [styles.PricingPlanCard_Invert]: invert }, className)}>
      <CardHeader className={styles.PricingPlanCard__Header} name={name} invert={invert} />
      <div className={styles.PricingPlanCard__Content}>
        <CardTitle invert={invert}>{title}</CardTitle>
        <CardPrice className={styles.PricingPlanCard__Price} invert={invert}>
          {price}
        </CardPrice>
        <CardDescription className={styles.PricingPlanCard__Description}>{description}</CardDescription>
        <div className={styles.PricingPlanCard__FeatureList}>{featureElements}</div>
      </div>
      <MainButton className={styles.PricingPlanCard__Button} text="купить" />
    </div>
  );
}
