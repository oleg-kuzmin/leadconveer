import { ISlideObject } from '@/shared/lib/types';
import { Slide } from './Slide';
import styles from './HowItWorks.module.scss';

interface HowItWorksProps {
  className?: string;
}

const slides: ISlideObject[] = [
  {
    step: '01',
    title: 'Регистрация и добавление проекта в систему',
    isOrdered: true,
    list: [
      'Зарегистрируйтесь в нашем личном кабинете',
      'При добавление проекта вам необходимо указать URL (адрес) своего сайта',
      'Для вашего сайта будет сгенерирован уникальный код, который необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>)',
    ],
  },
  {
    step: '02',
    title: 'Выбор пакета и количества Лидов',
    isOrdered: false,
    list: [
      'После добавления проекта в систему, вам необходимо выбрать тот пакет и количество Лидов, которое вам необходимо.',
    ],
  },
  {
    step: '03',
    title: 'Оплата проекта',
    isOrdered: false,
    list: ['Оплатить Лидов вы сможете пластиковой картой или безналичным переводом.'],
  },
  {
    step: '04',
    title: 'Получение кода для сайта',
    isOrdered: false,
    list: [
      'После оплаты, система для вас сгенерирует код, который вам необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>).',
    ],
  },
  {
    step: '05',
    title: 'Начало получения Лидов',
    isOrdered: false,
    list: [
      'В зависимости от вашей тематики (услуги или товара), а также объёма вашего трафика сайта система будет добавлять в личном кабинете контакты потенциальных клиентов, заинтересованных в вашей услуги и из вашего региона.',
    ],
  },
];

export function HowItWorks({ className }: Readonly<HowItWorksProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <section className={styles.HowItWorks + externalClass}>
      {/* <SectionTitle>Как это работает?</SectionTitle> */}
      <Slide slideObject={slides[0]} />
    </section>
  );
}
