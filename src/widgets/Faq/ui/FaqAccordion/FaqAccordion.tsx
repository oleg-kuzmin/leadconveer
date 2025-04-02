import cn from 'classnames';
import { Question } from '../Faq';
import { AccordionElement } from './AccordionElement';
import styles from './FaqAccordion.module.scss';

interface FaqAccordionProps {
  faq: Question[];
  className?: string;
}

export function FaqAccordion({ faq, className }: Readonly<FaqAccordionProps>) {
  const accordionElements = faq.map(item => {
    return <AccordionElement key={item.question} question={item.question} answer={item.answer} />;
  });

  return <div className={cn(styles.FaqAccordion, className)}>{accordionElements}</div>;
}
