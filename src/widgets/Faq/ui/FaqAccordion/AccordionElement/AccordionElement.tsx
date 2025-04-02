'use client';

import { useState } from 'react';
import cn from 'classnames';
import { AccordionElementButton } from './AccordionElementButton';
import { AccordionElementPanel } from './AccordionElementPanel';
import styles from './AccordionElement.module.scss';

interface AccordionElementProps {
  question: string;
  answer: string[];
  className?: string;
}

export function AccordionElement({ question, answer, className }: Readonly<AccordionElementProps>) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cn(styles.AccordionElement, className)}>
      <AccordionElementButton isActive={isActive} setIsActive={setIsActive} question={question} />
      <AccordionElementPanel isActive={isActive} answer={answer} />
    </div>
  );
}
