import cn from 'classnames';
import { HeroSubtitle } from './HeroSubtitle';
import { Smile } from './Smile';
import styles from './HeroSubtitleContainer.module.scss';

interface HeroSubtitleContainerProps {
  className?: string;
}

export function HeroSubtitleContainer({ className }: Readonly<HeroSubtitleContainerProps>) {
  return (
    <div className={cn(styles.HeroSubtitleContainer, className)}>
      <HeroSubtitle />
      <Smile />
    </div>
  );
}
