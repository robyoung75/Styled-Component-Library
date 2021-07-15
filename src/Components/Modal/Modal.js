// styled components
import Button from "../Button/Button";

import Input from "../Input/input";

// Styles
import { StyledWrapper, StyledP } from "../../Styles/Styles";
import { Header } from "../../Styles/HeaderStyles";

function Modal({
  onClickClose,
  onClickSubmit,
  username,
  onChangeUserName,
  password,
  onChangePassword,
  isFlex,
  flexDirection,
  alignItems,
  justifyContent,
  backgroundColor,
  padding,
  margin,
  color,
  background,
  width,
  height,
  position,
  left,
  top,
  transform,
  borderRadius,
  placeholderColor,
  children,
}) {
  return (
    <StyledWrapper
      isFlex
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      padding={padding}
      margin={margin}
      borderRadius={borderRadius}
      background={background}
      width={width}
      position={position}
      left={left}
      top={top}
      transform={transform}
      height={height}
    >
      {children}
    </StyledWrapper>
  );
}

export default Modal;
