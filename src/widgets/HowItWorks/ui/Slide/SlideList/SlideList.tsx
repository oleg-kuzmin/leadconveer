import cn from 'classnames';
import { SlideParagraph } from './SlideParagraph';
import styles from './SlideList.module.scss';

interface SlideListProps {
  list: string[];
  isOrdered: boolean;
  className?: string;
}

export function SlideList({ list, isOrdered, className }: Readonly<SlideListProps>) {
  const listElements = list.map(element => {
    return (
      <li className={styles.SlideList__Item} key={element}>
        <SlideParagraph text={element} />
      </li>
    );
  });

  if (isOrdered) {
    return <ol className={cn(styles.SlideList, styles.SlideList_OrderedList, className)}>{listElements}</ol>;
  }

  return <ul className={cn(styles.SlideList, className)}>{listElements}</ul>;
}
