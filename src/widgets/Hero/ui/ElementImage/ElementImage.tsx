import cn from 'classnames';
import Image from 'next/image';
import styles from './ElementImage.module.scss';

interface ElementImageProps {
  className?: string;
}

export function ElementImage({ className }: Readonly<ElementImageProps>) {
  return (
    <Image
      className={cn(styles.ElementImage, className)}
      src="/leadconveer/images/hero-image-x2.png"
      alt="Девушка за ноутбуком"
      width={791}
      height={497}
    />
  );
}
