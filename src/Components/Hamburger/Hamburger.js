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
  top,
  flexDirection,
  justifyContent,
  alignItems,
  borderRadius,
  zIndex,
  position,
  bunWidth,
  bunColor,
}) {
  return (
    <StyledHamburger isFlex>
      <StyledWrapper
        isFlex
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
        <StyledHamburgerTop
          isActive={isActive}
          bunWidth={bunWidth}
          bunColor={bunColor}
        />
        <StyledHamburgerMiddle
          isActive={isActive}
          bunWidth={bunWidth}
          bunColor={bunColor}
        />
        <StyledHamburgerBottom
          isActive={isActive}
          bunWidth={bunWidth}
          bunColor={bunColor}
        />
      </StyledWrapper>
    </StyledHamburger>
  );
}

Hamburger.defaultProps = {
  backgroundColor: "rgba(143,68,253)",
  width: "30px",
  height: "30px",
  bunWidth: "15px",
  right: "10px",
  top: "10px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  position: "absolute",
  zIndex: "10",
  bunColor: "rgba(255,255,255,.6)",
};

export default Hamburger;
