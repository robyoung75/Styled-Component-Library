// rendered in App as a child of Card and in Modal

import { StyledButton } from "./ButtonStyles";

function Button({
  onClick,
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
  hoverColor
}) {
  return (
    <StyledButton
      color={color}    
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
      hoverColor={hoverColor}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  background:"linear-gradient(to bottom right, #8162ce, #f54ba5)",
  fontSize: '1rem',
  height: '40px',
  width: 'auto',
  padding: '.25rem 1rem',
  margin: '1rem',
  border: 'none',
  borderRadius: '40px',
  boxShadow: '0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16)',
  color: "rgba(255,255,255,.89)",
  hoverColor: '#f54ba5',
}

export default Button;
