// Rendered by App

import { StyledCard } from "../../Styles/CardStyles";

function Card({
  children,
  isFlex,
  flexDirection,
  alignItems,
  justifyContent,
  margin = "0 0 1rem",
  padding = "1rem",
  background = "#100F10",
  border,
  width,
  height,
  borderRadius,
}) {
  return (
    <StyledCard
      isFlex={isFlex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      background={background}
      border={border}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {children}
    </StyledCard>
  );
}

export default Card;
