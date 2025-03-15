import cn from 'classnames';
import Image from 'next/image';
import styles from './CardImage.module.scss';

interface CardImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function CardImage({ src, alt, width, height, className }: Readonly<CardImageProps>) {
  return <Image className={cn(styles.CardImage, className)} src={src} alt={alt} width={width} height={height} />;
}
