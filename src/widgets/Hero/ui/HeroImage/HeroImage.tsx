import cn from 'classnames';
import Image from 'next/image';
import styles from './HeroImage.module.scss';

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className }: Readonly<HeroImageProps>) {
  return (
    <Image
      className={cn(styles.HeroImage, className)}
      src="/leadconveer/images/hero-image-x2.png"
      alt="Девушка за ноутбуком"
      width={791}
      height={497}
    />
  );
}
