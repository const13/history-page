import styled from "styled-components";
import { colorsUsage, mediaQueries } from "../../theme";

export const HistoricalPageWrapper = styled.div`
  position: relative;
  height: 100%;
  left: 16%;
  width: 75%;
  border-left: 1px solid ${colorsUsage.border10};
  border-right: 1px solid ${colorsUsage.border10};
  overflow: hidden;
  transition: left 0.3s ease-out;

  ${mediaQueries.isMobile} {
    left: 0;
    width: 100%;
    border: none;
  }
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
  transition: height 0.3s ease-out, width 0.3s ease-out;
  
  ${mediaQueries.isMobile} {
    position: relative;
    height: 52%;
    width: 87.5%;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid ${colorsUsage.line};
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 13%;
  width: min-content;
  padding-left: min(80px, 5vw);
  color: ${colorsUsage.fontPrimary};
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 120%;

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

  ${mediaQueries.isMobile} {
    top: 10.2%;
    font-size: 20px;
    padding-left: max(20px, 6vw);

    &:before {
      content: '';
      all: revert;
    }
  }
`;
