export type StepSlide = '01' | '02' | '03' | '04' | '05';

export interface ISlideObject {
  step: StepSlide;
  title: string;
  isOrdered: boolean;
  list: string[];
}

export type Theme = 'light' | 'dark';

export type HandleClickSliderBullet = (index: number) => void;
