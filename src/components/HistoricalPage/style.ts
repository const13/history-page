import styled from "styled-components";
import { colorsUsage } from "../../theme/palette";

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
