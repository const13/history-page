import { Swiper } from 'swiper/react';
import styled from "styled-components";

import { colorsUsage, mediaQueries } from "../../theme";
import ArrowIcon from '../../assets/arrow-r.svg';

export const SwiperWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 23vh;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-evenly;
  padding-left: 15px;
  padding-right: 15px;

  ${mediaQueries.isMobile} {
    height: 42vh;
    padding: 0;
  }
`;

export const StyledSwiper = styled(Swiper)`
  &.swiper {
    width: 66vw;
    position: relative;
    bottom: 0;
    overflow: hidden;
    
    ${mediaQueries.isMobile} {
      width: 100%;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  
  .swiper-wrapper {
    position: absolute;
    display: flex;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${colorsUsage.fontPrimary};
    font-size: 20px;
    line-height: 30px;
    min-width: 17vw;
    width: max-content;
    max-width: 20vw;

    ${mediaQueries.isMobile} {
      min-width: max(166px, 17vw);
    }
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;

    &.swiper-pagination-bullet-active {
      background-color: ${colorsUsage.paginationBullet};
    }
  }
`;

export const SlideTitle = styled.span`
    color: ${colorsUsage.fontSecondary};
    font-family: 'Bebas Neue';
    font-size: 25px;
    line-height: 120%;
    margin-bottom: 5px;
    user-select: none;

    ${mediaQueries.isMobile} {
      font-size: 16px;
    }
`;

export const SlideText = styled.span`
    user-select: none;
    overflow: hidden;

    ${mediaQueries.isMobile} {
      height: 60%;
      font-size: 14px;
      line-height: 145%;
    }
`;

export const SwiperButton = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   margin-top: 45px;
   box-shadow: 0 0 15px ${colorsUsage.buttonShadow};
   background-color: ${colorsUsage.buttonBg};
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   &.prev-button::after {
     content: url(${ArrowIcon});
     transform: rotate(180deg);
   }
   &.next-button::after {
     content: url(${ArrowIcon});
   }
   
   &.swiper-button-disabled {
    visibility: hidden;
   }
`;
