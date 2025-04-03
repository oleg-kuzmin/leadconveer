import cn from 'classnames';
import styles from './FooterPerson.module.scss';

interface FooterPersonProps {
  className?: string;
}

export function FooterPerson({ className }: Readonly<FooterPersonProps>) {
  return <p className={cn(styles.FooterPerson, className)}>ООО «ДС-ГРУПП» ИНН 7801355174 ОГРН 1187847129425</p>;
}
