import cn from 'classnames';
import { Content, SectionSubtitle, SectionTitle } from '@/shared/ui';
import { ReviewCards } from './ReviewCards';
import { VideoList } from './VideoList';
import styles from './Reviews.module.scss';

interface ReviewsProps {
  className?: string;
}

export function Reviews({ className }: Readonly<ReviewsProps>) {
  return (
    <section className={cn(styles.Reviews, className)}>
      <Content className={styles.Reviews__Content}>
        <SectionTitle className={styles.Reviews__Title}>Отзывы клиентов</SectionTitle>
        <SectionSubtitle className={styles.Reviews__Subtitle}>
          Более 89% наших клиентов сотрудничают с нами ежемесячно на протяжении более 2-х лет
        </SectionSubtitle>
        <ReviewCards className={styles.Reviews__Cards} />
        <VideoList />
      </Content>
    </section>
  );
}
