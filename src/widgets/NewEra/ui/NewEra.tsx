import cn from 'classnames';
import { Content } from '@/shared/ui';
import { NewEraBuy } from './NewEraBuy';
import { NewEraDescription } from './NewEraDescription';
import styles from './NewEra.module.scss';

interface NewEraProps {
  className?: string;
}

export function NewEra({ className }: Readonly<NewEraProps>) {
  return (
    <section className={cn(styles.NewEra, className)}>
      <Content className={styles.NewEra__Content}>
        <NewEraBuy />
        <NewEraDescription />
      </Content>
    </section>
  );
}
