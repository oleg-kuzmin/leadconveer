import cn from 'classnames';
import Image from 'next/image';
import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: Readonly<LogoProps>) {
  return (
    <Image
      className={cn(styles.Logo, className)}
      src="/leadconveer/svg/logo.svg"
      alt="Логотип leadconveer"
      width={251}
      height={70}
    />
  );
}
