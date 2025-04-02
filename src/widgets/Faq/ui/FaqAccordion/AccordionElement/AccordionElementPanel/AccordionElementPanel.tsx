import cn from 'classnames';
import styles from './AccordionElementPanel.module.scss';

interface AccordionElementPanelProps {
  isActive: boolean;
  answer: string[];
  className?: string;
}

export function AccordionElementPanel({ answer, isActive, className }: Readonly<AccordionElementPanelProps>) {
  const contentElements = answer.map(item => {
    return <p key={item}>{item}</p>;
  });

  return (
    <div className={cn(styles.AccordionElementPanel, { [styles.AccordionElementPanel_Active]: isActive }, className)}>
      <div className={styles.AccordionElementPanel__Content}>{contentElements}</div>
    </div>
  );
}
