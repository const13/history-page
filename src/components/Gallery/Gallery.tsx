import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper/modules';
import { DateEvent, } from '../../types';
import Swiper from 'swiper';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { animationDuration } from '../../theme';

import 'swiper/css';
import 'swiper/css/pagination';
import {
  SlideText,
  SlideTitle,
  StyledSwiper,
  SwiperButton,
  SwiperWrapper,
} from './style';

interface Props {
  data: DateEvent[];
}

export const Gallery = ({ data }: Props) => {
  
  const [swiper, setSwiper] = useState<Swiper>();
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setTimeout(() => {
      swiper?.slideTo(0);
    }, animationDuration * 1000 / 2);

    return () => {
      clearInterval(interval)
    };
  });

  return (
    <SwiperWrapper>
      {!isMobile && <SwiperButton className={'prev-button'} />}
      <StyledSwiper
        slidesPerView={'auto'}
        grabCursor={true}
        spaceBetween={'5%'}
        mousewheel={true}
        navigation={!isMobile && {
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, Pagination]}
        pagination={isMobile && {
          clickable: true,
        }}
        onSwiper={(swiper: Swiper) => setSwiper(swiper)}
        fadeEffect={{ crossFade: true }}
      >
        {data.map(({ id, date, text }) =>
          <SwiperSlide key={id}>
            <SlideTitle>{date}</SlideTitle>
            <SlideText>{text}</SlideText>
          </SwiperSlide>
        )}
      </StyledSwiper>
      {!isMobile && <SwiperButton className={'next-button'} />}
    </SwiperWrapper >
  );
}
