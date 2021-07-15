// rendered in App as a child of Card and in Modal

import { StyledButton } from "../../Styles/ButtonStyles";

function Button({
  onClick,
  primary,
  color,
  children,
  background,
  fontSize,
  height,
  width,
  margin,
  padding,
  border,
  borderRadius,
  boxShadow,
}) {
  return (
    <StyledButton
      color={color}
      primary={primary}
      onClick={onClick}
      background={background}
      fontSize={fontSize}
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
