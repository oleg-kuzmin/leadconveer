import cn from 'classnames';
import { Content, SectionTitle } from '@/shared/ui';
import { FaqAccordion } from './FaqAccordion';
import { FaqBgImage } from './FaqBgImage';
import { FaqInfo } from './FaqInfo';
import styles from './Faq.module.scss';

interface FaqProps {
  className?: string;
}

export interface Question {
  question: string;
  answer: string[];
}

const faq: Question[] = [
  {
    question: 'На сколько это безопасно, законно и может ли навредить моему сайту?',
    answer: [
      'Происходит обработка обезличенных данных (cookies). Cookies - маленький фрагмент данных, который сохраняется в браузере и передается при обращению к сайтам.',
      'Вы можете разместить в политике конфиденциальности условия с согласием на передачу и обработку cookies посетителями вашего сайта.Таким образом, это гарантирует полную легальность работы с данными.',
      'Для сайта это не может навредить, и санкций со стороны поисковых систем (Яндекс, Google) нет.',
    ],
  },
  {
    question: 'Откуда берутся номера телефонов?',
    answer: [
      'Происходит обработка обезличенных данных (cookies). Cookies - маленький фрагмент данных, который сохраняется в браузере и передается при обращению к сайтам.',
      'Вы можете разместить в политике конфиденциальности условия с согласием на передачу и обработку cookies посетителями вашего сайта.Таким образом, это гарантирует полную легальность работы с данными.',
      'Для сайта это не может навредить, и санкций со стороны поисковых систем (Яндекс, Google) нет.',
    ],
  },
  {
    question: 'Смогу ли я сам установить код на сайт?',
    answer: [
      'Происходит обработка обезличенных данных (cookies). Cookies - маленький фрагмент данных, который сохраняется в браузере и передается при обращению к сайтам.',
      'Вы можете разместить в политике конфиденциальности условия с согласием на передачу и обработку cookies посетителями вашего сайта.Таким образом, это гарантирует полную легальность работы с данными.',
      'Для сайта это не может навредить, и санкций со стороны поисковых систем (Яндекс, Google) нет.',
    ],
  },
  {
    question: 'На какую CMS или конструктор можно установить код «Лид Конвейер»?',
    answer: [
      'Происходит обработка обезличенных данных (cookies). Cookies - маленький фрагмент данных, который сохраняется в браузере и передается при обращению к сайтам.',
      'Вы можете разместить в политике конфиденциальности условия с согласием на передачу и обработку cookies посетителями вашего сайта.Таким образом, это гарантирует полную легальность работы с данными.',
      'Для сайта это не может навредить, и санкций со стороны поисковых систем (Яндекс, Google) нет.',
    ],
  },
  {
    question: 'Как оплатить ваш сервис?',
    answer: [
      'Происходит обработка обезличенных данных (cookies). Cookies - маленький фрагмент данных, который сохраняется в браузере и передается при обращению к сайтам.',
      'Вы можете разместить в политике конфиденциальности условия с согласием на передачу и обработку cookies посетителями вашего сайта.Таким образом, это гарантирует полную легальность работы с данными.',
      'Для сайта это не может навредить, и санкций со стороны поисковых систем (Яндекс, Google) нет.',
    ],
  },
];

export function Faq({ className }: Readonly<FaqProps>) {
  return (
    <section className={cn(styles.Faq, className)}>
      <Content className={styles.Faq__Content}>
        <SectionTitle className={styles.Faq__Title}>Вопросы и ответы</SectionTitle>
        <FaqInfo>
          <FaqAccordion faq={faq} />
          <FaqBgImage />
        </FaqInfo>
      </Content>
    </section>
  );
}
