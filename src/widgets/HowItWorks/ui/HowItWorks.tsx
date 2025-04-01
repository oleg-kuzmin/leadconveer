'use client';

import { useRef, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import cn from 'classnames';
import { ISlideObject } from '@/shared/lib/types';
import { Content, ElementSectionTitle } from '@/shared/ui';
import { HowContainer } from './HowContainer';
import { HowSlides } from './HowSlides';
import { SliderBullets } from './SliderBullets';
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
  const [indexActiveSlide, setIndexActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleClickBullet = (index: number) => {
    swiperRef.current?.slideToLoop(index, 1000);
  };

  return (
    <section className={cn(styles.HowItWorks, className)}>
      <Content>
        <HowContainer>
          <ElementSectionTitle className={styles.HowItWorks__Title}>Как это работает?</ElementSectionTitle>
          <HowSlides swiperRef={swiperRef} slides={slides} setIndexActiveSlide={setIndexActiveSlide} />
          <SliderBullets
            onClick={handleClickBullet}
            className={styles.HowItWorks__SliderBullets}
            indexActive={indexActiveSlide}
            length={slides.length}
          />
        </HowContainer>
      </Content>
    </section>
  );
}
