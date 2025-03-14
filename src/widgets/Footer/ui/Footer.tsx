import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: Readonly<FooterProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Footer + externalClass}></div>
  );
}