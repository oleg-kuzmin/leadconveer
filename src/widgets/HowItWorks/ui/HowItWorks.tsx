import styles from './HowItWorks.module.scss';

interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({ className }: Readonly<HowItWorksProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.HowItWorks + externalClass}></div>
  );
}