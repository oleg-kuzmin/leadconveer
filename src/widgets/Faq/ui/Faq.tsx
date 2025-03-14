import styles from './Faq.module.scss';

interface FaqProps {
  className?: string;
}

export function Faq({ className }: Readonly<FaqProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Faq + externalClass}></div>
  );
}