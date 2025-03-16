import cn from 'classnames';
import { ISlideObject } from '@/shared/lib/types';
import { SlideList } from './SlideList';
import { SlideStep } from './SlideStep';
import { SlideTitle } from './SlideTitle';
import styles from './Slide.module.scss';

interface SlideProps {
  slideObject: ISlideObject;
  className?: string;
}

export function Slide({ slideObject, className }: Readonly<SlideProps>) {
  return (
    <div className={cn(styles.Slide, className)}>
      <div className={styles.Slide__Header}>
        <SlideStep step={slideObject.step} className={styles.Slide__Step} />
        <SlideTitle text={slideObject.title} />
      </div>
      <SlideList className={styles.Slide__List} isOrdered={slideObject.isOrdered} list={slideObject.list} />
    </div>
  );
}
