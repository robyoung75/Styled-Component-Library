import styled, { css } from "styled-components";

import {device} from '../Styles/Styles'

const StyledHamburger = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const activeStylesBuns = css`
  transform: translate(0, 0) rotate(0deg);
`;

const activeStylesMiddle = css`
  transform: translateX(0);
`;

const StyledHamburgerTop = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translate(0, 6px) rotate(45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;

const StyledHamburgerMiddle = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translateX(100px);
  ${(props) => props.isActive && activeStylesMiddle}
`;

const StyledHamburgerBottom = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translate(0, -6px) rotate(-45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;
export { StyledHamburger, StyledHamburgerTop, StyledHamburgerMiddle, StyledHamburgerBottom };
