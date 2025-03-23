import cn from 'classnames';
import Image from 'next/image';
import styles from './ElementCardImage.module.scss';

interface ElementCardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ElementCardImage({ src, alt, className }: Readonly<ElementCardImageProps>) {
  return <Image className={cn(styles.ElementCardImage, className)} src={src} alt={alt} width={364} height={349} />;
}
