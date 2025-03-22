import cn from 'classnames';
import Image from 'next/image';
import styles from './LogoElement.module.scss';

interface LogoElementProps {
  className?: string;
}

export function LogoElement({ className }: Readonly<LogoElementProps>) {
  return (
    <Image
      className={cn(styles.LogoElement, className)}
      src="/leadconveer/svg/logo.svg"
      alt="Логотип leadconveer"
      width={251}
      height={70}
    />
  );
}
