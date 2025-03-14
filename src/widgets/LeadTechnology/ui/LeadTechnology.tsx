import styles from './LeadTechnology.module.scss';

interface LeadTechnologyProps {
  className?: string;
}

export function LeadTechnology({ className }: Readonly<LeadTechnologyProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.LeadTechnology + externalClass}></div>
  );
}