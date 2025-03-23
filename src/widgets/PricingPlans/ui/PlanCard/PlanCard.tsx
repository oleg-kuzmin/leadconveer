import cn from 'classnames';
import { theme } from '@/shared/lib/types';
import { MainButtonElement, StarElement } from '@/shared/ui';
import { CardContent } from './CardContent';
import { CardDescriptionElement } from './CardDescriptionElement';
import { CardHeader } from './CardHeader';
import { CardLabelElement } from './CardLabelElement';
import { CardPriceElement } from './CardPriceElement';
import { CardStats } from './CardStats';
import { CardTitleContainer } from './CardTitleContainer';
import { CardTitleElement } from './CardTitleElement';
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
      <CardHeader className={styles.PlanCard__Header}>
        <CardLabelElement text={name} theme={theme} />
        <StarElement
          className={styles.PlanCard__Star}
          icon={theme === 'light' ? 'pricingPlanCard' : 'pricingPlanCardDark'}
        />
      </CardHeader>
      <CardContent>
        <CardTitleContainer className={styles.PlanCard__TitleContainer}>
          <CardTitleElement theme={theme}>{title}</CardTitleElement>
          <CardPriceElement theme={theme}>{price}</CardPriceElement>
        </CardTitleContainer>
        <CardDescriptionElement className={styles.PlanCard__Description}>{description}</CardDescriptionElement>
        <CardStats className={styles.PlanCard__Stats} stats={stats} theme={theme} />
      </CardContent>
      <MainButtonElement className={styles.PlanCard__Button} text="купить" />
    </div>
  );
}
