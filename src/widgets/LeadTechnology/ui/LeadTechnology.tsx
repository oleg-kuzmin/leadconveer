import { Content } from '@/shared/ui';
import { ElementBgImage } from './ElementBgImage';
import { TextColumn } from './TextColumn';
import styles from './LeadTechnology.module.scss';

interface LeadTechnologyProps {
  className?: string;
}

export function LeadTechnology({ className }: Readonly<LeadTechnologyProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <section className={styles.LeadTechnology + externalClass}>
      <Content className={styles.LeadTechnology__Content}>
        <ElementBgImage className={styles.LeadTechnology__BgImage} />
        <TextColumn className={styles.LeadTechnology__TextColumn} />
      </Content>
    </section>
  );
}
