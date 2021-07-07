import styled, { css } from "styled-components";

const StyledMeter = styled.meter`
  width: 200px;
  height: 20px;

  
  &::-webkit-meter-bar {
    background: none;
    background-color: lightgrey;
    box-shadow: 0 3px 3px -3px #333 inset;
  }

  &::-webkit-meter-optimum-value {
    box-shadow: 0 3px 3px -3px #999 inset;
    background-image: linear-gradient(90deg, #8162ce, #f54ba5);
    background-size: 100% 100%;
  }
`;

export { StyledMeter };
