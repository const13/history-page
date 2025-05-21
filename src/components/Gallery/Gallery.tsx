import React, { memo, useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import gsap from 'gsap';
import { DateEvent, } from '../../types';
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
  const sRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(sRef.current,
      { opacity: 0, duration: 1 },
      { opacity: 1, duration: 1 },
    )
  }, [data]);
  return (
    <SwiperWrapper ref={sRef}>
      <SwiperButton className={'prev-button'} />
      <StyledSwiper
        slidesPerView={'auto'}
        grabCursor={true}
        spaceBetween={'5%'}
        mousewheel={true}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
      >
        {data.map(({ id, date, text }) =>
          <SwiperSlide key={id}>
            <SlideTitle>{date}</SlideTitle>
            <SlideText>{text}</SlideText>
          </SwiperSlide>
        )}
      </StyledSwiper>
      <SwiperButton className={'next-button'} />
    </SwiperWrapper>
  );
})
