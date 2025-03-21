import cn from 'classnames';
import Image from 'next/image';
import styles from './CardImage.module.scss';

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CardImage({ src, alt, className }: Readonly<CardImageProps>) {
  return <Image className={cn(styles.CardImage, className)} src={src} alt={alt} width={364} height={349} />;
}
