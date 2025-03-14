import styles from './RegistrationSecond.module.scss';

interface RegistrationSecondProps {
  className?: string;
}

export function RegistrationSecond({ className }: Readonly<RegistrationSecondProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.RegistrationSecond + externalClass}></div>
  );
}