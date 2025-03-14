import styles from './VideoPresentaion.module.scss';

interface VideoPresentaionProps {
  className?: string;
}

export function VideoPresentaion({ className }: Readonly<VideoPresentaionProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.VideoPresentaion + externalClass}></div>
  );
}