import styled from "styled-components";

export const YearsWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 43%;
  transform: translate(-51%, -50%);
  display: flex;
  justify-content: space-between;
  gap: 5vw;
`;

export const Years = styled.span<{ $color: string }>`
  color: ${props => props.$color};
  font-size: 18vh;
  font-weight: 700;
  line-height: 160px;
`;