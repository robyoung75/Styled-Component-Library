import React from "react";
import { StyledWrapper } from "../../Styles/Styles";
import {
  StyledHamburgerTop,
  StyledHamburgerMiddle,
  StyledHamburgerBottom,
} from "../../Styles/HamburgerStyles";

// rendered by Navbar
function Hamburger({
  isFlex,
  isActive,
  onClick,
  backgroundColor,
  width,
  height,
  right,
  top,
}) {
  return (
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
      <StyledHamburgerTop isActive={isActive} width={width} />
      <StyledHamburgerMiddle isActive={isActive} width={width} />
      <StyledHamburgerBottom isActive={isActive} width={width} />
    </StyledWrapper>
  );
}

export default Hamburger;
