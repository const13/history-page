import styled from "styled-components";
import { mediaQueries } from "../../theme";

export const YearsWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 43%;
  transform: translate(-51%, -50%);
  display: flex;
  justify-content: space-between;
  gap: 5vw;
  user-select: none;

  ${mediaQueries.isTablet} {
    flex-direction: column;
    gap: 1vw;
  }
  
  ${mediaQueries.isMobile} {
    top: 34.5%;
    flex-direction: row;
    gap: 8vw;
  }
`;

export const Years = styled.span<{ $color: string }>`
  color: ${props => props.$color};
  font-size: 18vh;
  font-weight: 700;
  line-height: 160px;
  
  ${mediaQueries.isTablet} {
    font-size: 15vw;
    line-height: 100%;
  }

  ${mediaQueries.isMobile} {
    font-size: 56px;
    letter-spacing: -1px;
  }
`;