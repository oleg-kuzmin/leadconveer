import cn from 'classnames';
import { SectionSubtitle, SectionTitle, Video } from '@/shared/ui';
import { ReviewCard } from './ReviewCard';
import { ReviewVideo } from './ReviewVideo';
import styles from './Reviews.module.scss';

interface ReviewsProps {
  className?: string;
}

export function Reviews({ className }: Readonly<ReviewsProps>) {
  return (
    <section className={cn(styles.Reviews, className)}>
      {/* <SectionTitle className={styles.Reviews__Title}>Отзывы клиентов</SectionTitle> */}
      {/* <SectionSubtitle className={styles.Reviews__Subtitle}>
        Более 89% наших клиентов сотрудничают с нами ежемесячно на протяжении более 2-х лет
      </SectionSubtitle> */}
      {/* <ReviewCard
        rating="5,0"
        text="«Стабильно получаем новые лиды из сервиса. С точки зрения рентабельности нареканий нет. Тёплая заявка 800–1000 рублей, конверсия, цена-качество устраивает. Общее впечатление достаточно хорошее, цена, качество, скорость»."
        alcove="Ниша: банкротство, списание долгов"
      /> */}
      {/* <ReviewCard
        rating="4,8"
        text="«С вашим сервисом работаем с июня 22 года. Нас заинтересовало, и мы решили протестировать. Взяли минимальный пакет из 10 новых лидов, а потом, как он закончился, взяли повышенный пакет. Учитывая нашу сферу и посмотреть статистику,из 100 заинтересованных 15 в продажу. Это хороший результат»."
        alcove="Ниша: банкротство, списание долгов"
      /> */}
      {/* <ReviewCard
        rating="5,0"
        text="«С сервисом работаем чуть меньше года. Немного сомневались, но согласились попробовать, а после продолжили работать. Новые клиенты появились сразу, передали на наш колл-центр. С вашего источника дешевле, чем с других сервисов. Безусловно, с вами стоит работать»."
        alcove="Ниша: банкротство, списание долгов"
      /> */}
      {/* <ReviewCard
        rating="4,9"
        text="«С вашей компанией работаем более 2‑х лет, сотрудничество полезное. Мы все посмотрели, разобрались, что сервис даёт реально целевые заявки. Заключили контракт на 23 000 рублей, окупилось. Понравилась технология, она помогает нам получать лиды»."
        alcove="Ниша: банкротство, списание долгов"
      /> */}
      {/* <ReviewVideo
        caption="Отзыв 1: название"
        src="/leadconveer/video/video.mp4"
        type="video/mp4"
        poster="/leadconveer/video/poster.jpg"
      /> */}
    </section>
  );
}
