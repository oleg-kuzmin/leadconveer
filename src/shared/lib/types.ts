export interface ISlideObject {
  step: '01' | '02' | '03' | '04' | '05';
  title: string;
  isOrdered: boolean;
  list: string[];
}

export type theme = 'light' | 'dark';
