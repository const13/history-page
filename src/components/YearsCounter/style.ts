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


export const Years = styled.span<{ $value: number; $color: string, $id: string }>`
  @property --${props => props.$id} {
    syntax: "<integer>";
    initial-value: ${props => props.$value};
    inherits: false;
  }
  transition: --${props => props.$id} 0.4s ease-in;
  counter-set: ${props => props.$id} var(--${props => props.$id});
  color: ${props => props.$color};
  font-size: 18vh;
  font-weight: 700;
  line-height: 160px;

  &::after {
    content: counter(${props => props.$id}, decimal);
  }
`;