import styled from "styled-components";
import { colorsUsage } from "../../theme/palette";
import ArrowIcon from '../../assets/arrow-r2.svg';

export const Wrapper = styled.div`
  position: absolute;
  top: 65vh;
  width: 120px;
  height: 80px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
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
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.5s;

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
   }
`;

export const Next = styled(Btn)`
  padding: 4px 0 0 4px;

  &::after {
     content: url(${ArrowIcon});
   }
`;
