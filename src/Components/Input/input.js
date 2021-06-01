import { StyledInput } from "../../Styles/Styles";

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
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      color={color}
      width={width}
      background={background}
    />
  );
}

export default Input;
