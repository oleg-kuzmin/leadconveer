import cn from 'classnames';
import { ElementMainButton } from '@/shared/ui';
import { ElementSmile } from '../ElementSmile';
import { ElementSubtitle } from '../ElementSubtitle';
import { ElementTitle } from '../ElementTitle';
import styles from './Text.module.scss';

interface TextProps {
  className?: string;
}

export function Text({ className }: Readonly<TextProps>) {
  return (
    <div className={cn(styles.Text, className)}>
      <ElementTitle />
      <div className={styles.Text__Price}>
        <ElementSubtitle className={styles.Text__Subtitle} />
        <ElementSmile />
      </div>
      <ElementMainButton className={styles.Text__Button} text="Выбрать пакет лидов" />
    </div>
  );
}
