import cn from 'classnames';
import Image from 'next/image';
import styles from './ElementLogo.module.scss';

interface ElementLogoProps {
  className?: string;
}

export function ElementLogo({ className }: Readonly<ElementLogoProps>) {
  return (
    <Image
      className={cn(styles.ElementLogo, className)}
      src="/leadconveer/svg/logo.svg"
      alt="Логотип leadconveer"
      width={251}
      height={70}
    />
  );
}
