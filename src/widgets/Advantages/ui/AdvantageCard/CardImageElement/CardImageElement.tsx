import cn from 'classnames';
import Image from 'next/image';
import styles from './CardImageElement.module.scss';

interface CardImageElementProps {
  src: string;
  alt: string;
  className?: string;
}

export function CardImageElement({ src, alt, className }: Readonly<CardImageElementProps>) {
  return <Image className={cn(styles.CardImageElement, className)} src={src} alt={alt} width={364} height={349} />;
}
