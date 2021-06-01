import { StyledInput, StyledP } from "../../Styles/Styles";

import styled from "styled-components";

const StyledLabel = styled.label``;
function Input({
  onChange,
  type,
  placeholder,
  value,
  color,
  width,
  background,
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
        width="200px"
        background={background}
      />
    </StyledLabel>
  );
}

export default Input;
