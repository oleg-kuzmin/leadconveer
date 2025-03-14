import styles from './RegistrationFirst.module.scss';

interface RegistrationFirstProps {
  className?: string;
}

export function RegistrationFirst({ className }: Readonly<RegistrationFirstProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.RegistrationFirst + externalClass}></div>
  );
}