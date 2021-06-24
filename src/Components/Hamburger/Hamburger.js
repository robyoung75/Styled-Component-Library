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
  flexDirection,
  justifyContent,
  alignItems,
  backgroundColor,
  borderRadius,
  width,
  height,
  zIndex,
  position,
  right,
  top,
}) {
  return (
    <StyledWrapper
      isFlex={isFlex}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      zIndex={zIndex}
      position={position}
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
