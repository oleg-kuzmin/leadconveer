import cn from 'classnames';
import styles from './SlideTextList.module.scss';

interface SlideTextListProps {
  list: string[];
  isOrdered?: boolean;
  className?: string;
}

export function SlideTextList({ list, isOrdered, className }: Readonly<SlideTextListProps>) {
  const textElements = list.map(item => {
    return (
      <li key={item}>
        <p>{item}</p>
      </li>
    );
  });

  return (
    <ul className={cn(styles.SlideTextList, { [styles.SlideTextList_Ordered]: isOrdered }, className)}>
      {textElements}
    </ul>
  );
}
