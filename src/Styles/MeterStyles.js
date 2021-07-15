import styled, { css } from "styled-components";

const StyledMeter = styled.meter`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &::-webkit-meter-bar {
    background: none;
    background-color: ${(props) => props.backgroundColor};
    box-shadow: 0 3px 3px -3px #333 inset;
  }

  &::-webkit-meter-optimum-value {
    box-shadow: 0 3px 3px -3px #999 inset;
    background-image: ${props => props.backgroundImage};
    background-size: 100% 100%;
  }
`;

export { StyledMeter };
