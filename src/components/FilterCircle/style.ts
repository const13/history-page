import styled from "styled-components";
import { colorsUsage } from "../../theme";

export const Circle = styled.div<{ $angle: number }>`
  position: relative;
  left: 50%;
  top: 44%;
  transform: translate(-50%, -50%) rotate(${props => -props.$angle}deg);
  border-radius: 50%;
  border: 1px solid ${colorsUsage.border20};
  z-index: 1;
  transition: transform 0.5s ease-in-out;
  transform-origin: center;
`;

export const Point = styled.div<{ $angle: number }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${colorsUsage.fontPrimary};
  cursor: pointer;
  transform: rotate(${props => props.$angle}deg);
  transition: height 0.2s ease-out, width 0.2s ease-out, background-color 0.2s ease-in, transform 0.3s linear;
`;

export const IndexText = styled.span`
  font-size: 0px;
  color: ${colorsUsage.fontPrimary};
  opacity: 0;
  transition: opacity 0.2s ease-in, font-size 0.2s ease-in;
`;

export const FilterName = styled.span`
  position: absolute;
  left: calc(100% + 15px); 
  font-size: 20px;
  font-weight: 700;
  color: ${colorsUsage.fontPrimary};
  opacity: 0;
  transition: opacity 0.3s ease-in;
  transition-delay: 0.5s;
  white-space: nowrap;
`;

export const PointWrapper = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translate(52%, -52%);
  cursor: pointer;
  
  &:hover, &.active {
    ${Point} {
      width: 56px;
      height: 56px;
      background-color: ${colorsUsage.mainBg};
      border: 1px solid ${colorsUsage.circleBorder};
    }
    ${IndexText} {
      opacity: 1;
      font-size:20px;
    }
  } 
  &.active {
    ${FilterName} {
      opacity: 1;
    }
  }
  &:not(.active) {
    ${FilterName} {
      transform: none;
      transition: opacity 0.3s ease-in;
    }
  }
`;
