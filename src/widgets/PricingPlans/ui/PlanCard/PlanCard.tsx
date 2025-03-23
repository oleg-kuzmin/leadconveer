import cn from 'classnames';
import { theme } from '@/shared/lib/types';
import { ElementMainButton, ElementStar } from '@/shared/ui';
import { CardStats } from '../CardStats';
import { ElementCardDescription } from '../ElementCardDescription';
import { ElementCardLabel } from '../ElementCardLabel';
import { ElementCardPrice } from '../ElementCardPrice';
import { ElementCardTitle } from '../ElementCardTitle';
import styles from './PlanCard.module.scss';

interface PlanCardProps {
  name: string;
  title: string;
  price: string;
  description: string;
  stats: string[];
  theme: theme;
  className?: string;
}

export function PlanCard({ name, title, price, description, stats, theme, className }: Readonly<PlanCardProps>) {
  let classTheme: string;

  switch (theme) {
    case 'light':
      classTheme = styles.PlanCard_Light;
      break;
    case 'dark':
      classTheme = styles.PlanCard_Dark;
      break;
    default:
      throw Error('PlanCard: unknown theme.');
  }

  return (
    <div className={cn(styles.PlanCard, classTheme, className)}>
      <div className={styles.PlanCard__Header}>
        <ElementCardLabel text={name} theme={theme} />
        <ElementStar
          className={styles.PlanCard__Star}
          icon={theme === 'light' ? 'pricingPlanCard' : 'pricingPlanCardDark'}
        />
      </div>
      <div className={styles.PlanCard__Content}>
        <div className={styles.PlanCard__TitleContainer}>
          <ElementCardTitle theme={theme}>{title}</ElementCardTitle>
          <ElementCardPrice theme={theme}>{price}</ElementCardPrice>
        </div>
        <ElementCardDescription className={styles.PlanCard__Description}>{description}</ElementCardDescription>
        <CardStats className={styles.PlanCard__Stats} stats={stats} theme={theme} />
      </div>
      <ElementMainButton className={styles.PlanCard__Button} text="купить" />
    </div>
  );
}
