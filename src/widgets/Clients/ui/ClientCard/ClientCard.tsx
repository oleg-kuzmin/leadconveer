import cn from 'classnames';
import Image from 'next/image';
import styles from './ClientCard.module.scss';

interface ClientCardProps {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  className?: string;
}

export function ClientCard({ imgSrc, imgAlt, imgWidth, imgHeight, className }: Readonly<ClientCardProps>) {
  return (
    <div className={cn(styles.ClientCard, className)}>
      <Image className={styles.ClientCard__Image} src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    </div>
  );
}
