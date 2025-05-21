import { Swiper } from 'swiper/react';
import styled from "styled-components";
import { colorsUsage } from "../../theme/palette";
import ArrowIcon from '../../assets/arrow-r.svg';

export const HistoricalPageWrapper = styled.div`
  position: relative;
  height: 100%;
  left: 16%;
  width: 75%;
  border-left: 1px solid ${colorsUsage.border10};
  border-right: 1px solid ${colorsUsage.border10};
  overflow: hidden;
`;

export const VLine = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  border-right: 1px solid ${colorsUsage.border10};
`;

export const HLine = styled.div`
  position: absolute;
  width: 100%;
  height: 44%;
  border-bottom: 1px solid ${colorsUsage.border10};
`;

export const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 44%;
  transform: translate(calc(-50%), -50%);
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  border: 1px solid ${colorsUsage.border20};
  z-index: 1;
`;

export const Title = styled.h1`
  position: absolute;
  width: min-content;
  padding-left: 80px;
  color: ${colorsUsage.fontPrimary};
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 120%;
  top: 13%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 5px;
    margin: 10px 0 5px;
    background: ${colorsUsage.titleGradient};
  }
`;

export const SwiperWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 23vh;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledSwiper = styled(Swiper)`
  
  &.swiper {
    width: 84%;
    position: relative;
    bottom: 0;
    height: 23vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  
  .swiper-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: ${colorsUsage.fontPrimary};
    font-size: 18px;
    line-height: 30px;
    min-width: 17vw;
    width: max-content;
    max-width: 20vw;
  }
`;

export const SlideTitle = styled.span`
    color: ${colorsUsage.fontSecondary};
    font-family: 'Bebas Neue';
    font-size: 25px;
    line-height: 120%;
    margin-bottom: 5px;
    user-select: none;
`;

export const SlideText = styled.span`
    user-select: none;
    overflow: hidden;
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
