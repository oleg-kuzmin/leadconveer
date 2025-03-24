import cn from 'classnames';
import { ReviewCard } from '../ReviewCard';
import styles from './ReviewCards.module.scss';

interface ReviewCardsProps {
  className?: string;
}

export function ReviewCards({ className }: Readonly<ReviewCardsProps>) {
  return (
    <div className={cn(styles.ReviewCards, className)}>
      <ReviewCard rating="5,0" footer="Ниша: банкротство, списание долгов">
        «Стабильно получаем новые лиды из сервиса. С точки зрения рентабельности нареканий нет. Тёплая заявка 800–1000
        рублей, конверсия, цена-качество устраивает. Общее впечатление достаточно хорошее, цена, качество, скорость».
      </ReviewCard>
      <ReviewCard rating="4,8" footer="Ниша: банкротство, списание долгов">
        «С вашим сервисом работаем с июня 22 года. Нас заинтересовало, и мы решили протестировать. Взяли минимальный
        пакет из 10 новых лидов, а потом, как он закончился, взяли повышенный пакет. Учитывая нашу сферу и посмотреть
        статистику, из 100 заинтересованных 15 в продажу. Это хороший результат».
      </ReviewCard>
      <ReviewCard rating="5,0" footer="Ниша: банкротство, списание долгов">
        «С сервисом работаем чуть меньше года. Немного сомневались, но согласились попробовать, а после продолжили
        работать. Новые клиенты появились сразу, передали на наш колл-центр. С вашего источника дешевле, чем с других
        сервисов. Безусловно, с вами стоит работать».
      </ReviewCard>
      <ReviewCard rating="4,9" footer="Ниша: банкротство, списание долгов">
        «С вашей компанией работаем более 2‑х лет, сотрудничество полезное. Мы все посмотрели, разобрались, что сервис
        даёт реально целевые заявки. Заключили контракт на 23 000 рублей, окупилось. Понравилась технология, она
        помогает нам получать лиды».
      </ReviewCard>
    </div>
  );
}
