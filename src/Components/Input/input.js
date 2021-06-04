import { StyledInput, StyledP } from "../../Styles/Styles";

import styled from "styled-components";

const StyledLabel = styled.label``;
function Input({
  onChange,
  type,
  placeholder,
  value,
  color,
  background,
  width,
}) {
  return (
    <StyledLabel>
      <StyledP color="#8f44fd">{placeholder}</StyledP>{" "}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        color={color}
        width={width}
        background={background}
      />
    </StyledLabel>
  );
}

export default Input;
