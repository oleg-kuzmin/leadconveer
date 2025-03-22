import cn from 'classnames';
import Image from 'next/image';
import styles from './HeroImageElement.module.scss';

interface HeroImageElementProps {
  className?: string;
}

export function HeroImageElement({ className }: Readonly<HeroImageElementProps>) {
  return (
    <Image
      className={cn(styles.HeroImageElement, className)}
      src="/leadconveer/images/hero-image-x2.png"
      alt="Девушка за ноутбуком"
      width={791}
      height={497}
    />
  );
}
