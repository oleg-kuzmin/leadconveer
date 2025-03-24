import cn from 'classnames';
import { Content, ElementSectionSubtitle, ElementSectionTitle } from '@/shared/ui';
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
        <ElementSectionTitle className={styles.Reviews__Title}>Отзывы клиентов</ElementSectionTitle>
        <ElementSectionSubtitle className={styles.Reviews__Subtitle}>
          Более 89% наших клиентов сотрудничают с нами ежемесячно на протяжении более 2-х лет
        </ElementSectionSubtitle>
        <ReviewCards className={styles.Reviews__Cards} />
        <VideoList />
      </Content>
    </section>
  );
}
