import React, { memo, useEffect, useRef, useState } from 'react';
import { Swiper as Swip, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { DateEvent, } from '../../types';
import Swiper from 'swiper';
import { useIsMobile } from '../../hooks/useMediaQuery';

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

export const Gallery = memo(({ data }: Props) => {
  const [swiper, setSwiper] = useState<Swiper>();
  const isMobile = useIsMobile()
  const sRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(sRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
    )
  }, [data]);

  useEffect(() => {
    swiper?.slideTo(0, 500);
  }, [data, swiper]);

  return (
    <SwiperWrapper>
      {!isMobile && <SwiperButton className={'prev-button'} />}
      <StyledSwiper ref={sRef}
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
})
