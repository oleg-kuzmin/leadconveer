'use client';

import { Dispatch, RefObject, SetStateAction } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import 'swiper/css';
import { ISlideObject } from '@/shared/lib/types';
import { SlideElement } from '../SlideElement';
import styles from './HowSlides.module.scss';

interface HowSlidesProps {
  swiperRef: RefObject<SwiperClass | null>;
  slides: ISlideObject[];
  setIndexActiveSlide: Dispatch<SetStateAction<number>>;
  className?: string;
}

export function HowSlides({ slides, swiperRef, setIndexActiveSlide, className }: Readonly<HowSlidesProps>) {
  const swiperConfig = {
    className: styles.HowSlides__Swiper,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 40,
  };

  const slideElements = slides.map(slide => {
    return (
      <SwiperSlide className={styles.HowSlides__Slide} key={slide.title}>
        <SlideElement slideObject={slide} />
      </SwiperSlide>
    );
  });

  return (
    <div className={cn(styles.HowSlides, className)}>
      <Swiper
        {...swiperConfig}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        onSlideChange={swiper => {
          setIndexActiveSlide(swiper.realIndex);
        }}>
        {slideElements}
      </Swiper>
    </div>
  );
}
