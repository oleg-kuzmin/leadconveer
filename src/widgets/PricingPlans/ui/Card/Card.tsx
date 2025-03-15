import cn from 'classnames';
import { MainButton } from '@/shared/ui';
import { CardDescription } from './CardDescription';
import { CardFeature } from './CardFeature';
import { CardHeader } from './CardHeader';
import { CardPrice } from './CardPrice';
import { CardTitle } from './CardTitle';
import styles from './Card.module.scss';

interface CardProps {
  name: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  invert?: boolean;
  className?: string;
}

export function Card({ name, title, price, description, features, invert = false, className }: Readonly<CardProps>) {
  const featureElements = features.map((feature, index) => {
    return (
      <CardFeature key={feature} bold={index === 1} invert={invert}>
        {feature}
      </CardFeature>
    );
  });

  return (
    <div className={cn(styles.Card, { [styles.Card_Invert]: invert }, className)}>
      <CardHeader className={styles.Card__Header} name={name} invert={invert} />
      <div className={styles.Card__Content}>
        <CardTitle invert={invert}>{title}</CardTitle>
        <CardPrice className={styles.Card__Price} invert={invert}>
          {price}
        </CardPrice>
        <CardDescription className={styles.Card__Description}>{description}</CardDescription>
        <div className={styles.Card__FeatureList}>{featureElements}</div>
      </div>
      <MainButton className={styles.Card__Button} text="купить" />
    </div>
  );
}
