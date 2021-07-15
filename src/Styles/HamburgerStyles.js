import styled, { css } from "styled-components";

import { device } from "../Styles/Styles";

const hamburgerStyles = css`
  width: ${(props) => props.bunWidth};
  height: 2px;
  background-color: ${(props) => props.bunColor};
  margin: 2px 0;
  transition: all 0.5s;
`;

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
  ${hamburgerStyles}
  transform: translate(0, 6px) rotate(45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;

const StyledHamburgerMiddle = styled.span`
${hamburgerStyles}
  transform: translateX(100px);
  ${(props) => props.isActive && activeStylesMiddle}
`;

const StyledHamburgerBottom = styled.span`
${hamburgerStyles}
  transform: translate(0, -6px) rotate(-45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;
export {
  StyledHamburger,
  StyledHamburgerTop,
  StyledHamburgerMiddle,
  StyledHamburgerBottom,
};
