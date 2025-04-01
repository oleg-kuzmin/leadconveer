import cn from 'classnames';
import { ISlideObject } from '@/shared/lib/types';
import { SlideHeader } from './SlideHeader';
import { SlideStep } from './SlideStep';
import { SlideStepIcon } from './SlideStepIcon';
import { SlideStepNumber } from './SlideStepNumber';
import { SlideTextList } from './SlideTextList';
import { SlideTitle } from './SlideTitle';
import styles from './SlideElement.module.scss';

interface SlideElementProps {
  slideObject: ISlideObject;
  className?: string;
}

export function SlideElement({ slideObject, className }: Readonly<SlideElementProps>) {
  return (
    <div className={cn(styles.SlideElement, className)}>
      <SlideHeader>
        <SlideStep>
          <SlideStepNumber text={slideObject.step} />
          <SlideStepIcon icon={slideObject.step} />
        </SlideStep>
        <SlideTitle>{slideObject.title}</SlideTitle>
      </SlideHeader>
      <SlideTextList list={slideObject.list} isOrdered={slideObject.isOrdered} />
    </div>
  );
}
