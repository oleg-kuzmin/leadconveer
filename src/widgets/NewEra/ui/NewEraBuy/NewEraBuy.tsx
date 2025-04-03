import cn from 'classnames';
import { AccentText, MainButton, SectionTitle } from '@/shared/ui';
import { BuyIcon } from './BuyIcon';
import styles from './NewEraBuy.module.scss';

interface NewEraBuyProps {
  className?: string;
}

export function NewEraBuy({ className }: Readonly<NewEraBuyProps>) {
  return (
    <div className={cn(styles.NewEraBuy, className)}>
      <SectionTitle className={styles.NewEraBuy__Title}>
        <AccentText>Лидогенерация —</AccentText> это&nbsp;новая эра&nbsp;маркетинга!
      </SectionTitle>
      <BuyIcon className={styles.NewEraBuy__Icon} />
      <MainButton text="Купить Лиды" />
    </div>
  );
}
