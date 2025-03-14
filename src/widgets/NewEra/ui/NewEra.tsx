import styles from './NewEra.module.scss';

interface NewEraProps {
  className?: string;
}

export function NewEra({ className }: Readonly<NewEraProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.NewEra + externalClass}></div>
  );
}