import cn from 'classnames';
import { ElementCardImage } from '../ElementCardImage';
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
      <ElementCardImage src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    </div>
  );
}
