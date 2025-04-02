import cn from 'classnames';
import { TypeSmallCardIcon } from '../FeatureSmallCard';
import styles from './SmallCardIcon.module.scss';

interface SmallCardIconProps {
  icon: TypeSmallCardIcon;
  className?: string;
}

export function SmallCardIcon({ icon, className }: Readonly<SmallCardIconProps>) {
  let classIcon: string;

  switch (icon) {
    case '100':
      classIcon = styles.SmallCardIcon_100;
      break;
    case 'fire':
      classIcon = styles.SmallCardIcon_Fire;
      break;
    case 'high-voltage':
      classIcon = styles.SmallCardIcon_HighVoltage;
      break;
    case 'run':
      classIcon = styles.SmallCardIcon_Run;
      break;
    case 'star':
      classIcon = styles.SmallCardIcon_Star;
      break;
    default:
      throw Error('SmallCardIcon: unknown icon.');
  }

  return <div className={cn(styles.SmallCardIcon, classIcon, className)}></div>;
}
