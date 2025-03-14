import styles from './Features.module.scss';

interface FeaturesProps {
  className?: string;
}

export function Features({ className }: Readonly<FeaturesProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Features + externalClass}></div>
  );
}