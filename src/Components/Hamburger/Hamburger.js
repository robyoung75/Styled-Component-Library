import React from "react";
import { StyledWrapper } from "../../Styles/Styles";
import {
  StyledHamburger,
  StyledHamburgerTop,
  StyledHamburgerMiddle,
  StyledHamburgerBottom,
} from "../../Styles/HamburgerStyles";

// rendered by Navbar
function Hamburger({
  isActive,
  onClick,
  backgroundColor,
  width,
  height,
  right,
  top
}) {
  return (
    <StyledHamburger isFlex>
    <StyledWrapper
      isFlex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="50%"
      width={width}
      height={height}
      zIndex="999"
      position="absolute"
      right={right}
      top={top}
      onClick={onClick}
    >
      <StyledHamburgerTop isActive={isActive} />
      <StyledHamburgerMiddle isActive={isActive} />
      <StyledHamburgerBottom isActive={isActive} />
    </StyledWrapper>
  </StyledHamburger>
);
}

export default Hamburger;
