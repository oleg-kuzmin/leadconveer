import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import styles from './AccordionElementButton.module.scss';

interface AccordionElementButtonProps {
  question: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export function AccordionElementButton({
  question,
  isActive,
  setIsActive,
  className,
}: Readonly<AccordionElementButtonProps>) {
  return (
    <button
      className={cn(styles.AccordionElementButton, { [styles.AccordionElementButton_Active]: isActive }, className)}
      onClick={() => setIsActive(!isActive)}>
      {question}
      {isActive ? (
        <svg
          className={styles.AccordionElementButton__Icon}
          viewBox="0 0 50 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H48" stroke="#2D2D2D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg
          className={styles.AccordionElementButton__Icon}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.785 2V48M2 25H48"
            stroke="#2d2d2d"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
