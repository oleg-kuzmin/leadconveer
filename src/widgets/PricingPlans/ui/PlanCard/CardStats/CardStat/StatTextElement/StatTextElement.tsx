import cn from 'classnames';
import { theme } from '../../../PlanCard';
import styles from './StatTextElement.module.scss';

interface StatTextElementProps {
  children: React.ReactNode;
  theme: theme;
  bold?: boolean;
  className?: string;
}

export function StatTextElement({ children, theme, bold, className }: Readonly<StatTextElementProps>) {
  let classTheme: string;

  switch (theme) {
    case 'dark':
      classTheme = styles.StatTextElement_ThemeDark;
      break;
    case 'light':
      classTheme = styles.StatTextElement_ThemeLight;
      break;
    default:
      throw Error('StatTextElement: unknown theme.');
  }

  return (
    <span className={cn(styles.StatTextElement, { [styles.StatTextElement_Bold]: bold }, classTheme, className)}>
      {children}
    </span>
  );
}
