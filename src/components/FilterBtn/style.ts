import styled from "styled-components";
import { colorsUsage, mediaQueries } from "../../theme";
import ArrowIcon from '../../assets/arrow-r2.svg';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 26vh;
  width: 120px;
  height: 80px;
  margin-left: min(80px, 5vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  z-index: 1;

  ${mediaQueries.isMobile} {
    width: 58px;
    height: 50px;
    margin-left: max(20px, 5vw);
    bottom: max(15px, 5vw);
  }
`;

export const Counter = styled.span`
  width: 100%;
  font-size: 14px;
  color: ${colorsUsage.fontPrimary};
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${colorsUsage.fontPrimary};
`;

export const Btn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid ${colorsUsage.buttonBorder};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.5s;

  ${mediaQueries.isMobile} {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: ${colorsUsage.buttonBg};
  }

  &.disabled {
    opacity: 0.5;
    background-color: transparent;
    cursor: default;
  }
`;

export const Prev = styled(Btn)`
  padding-bottom: 4px;

  &::after {
     content: url(${ArrowIcon});
     transform: rotate(180deg);

    ${mediaQueries.isMobile} {
      position: relative;
      top: 1px;
      left: -1px;
      transform: rotate(180deg) scale(0.5);
    }
   }
`;

export const Next = styled(Btn)`
  padding: 4px 0 0 4px;

  &::after {
     content: url(${ArrowIcon});

     ${mediaQueries.isMobile} {
      position: relative;
      top: -1.5px;
      left: -2px;
      transform:  scale(0.5);
    }
   }
`;
