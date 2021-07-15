import { StyledP, StyledLabel } from "../../Styles/Styles";
import { StyledInput } from "../../Styles/InputStyles";




function Input({
  onChange,
  type,
  placeholder,
  value,
  color,
  background,
  width,
  placeholderColor,
  labelColor
}) {
  return (
    <StyledLabel>
      <StyledP color={labelColor}>{placeholder}</StyledP>{" "}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        color={color}
        width={width}
        background={background}
        placeholderColor={placeholderColor}
      />
    </StyledLabel>
  );
}

export default Input;
