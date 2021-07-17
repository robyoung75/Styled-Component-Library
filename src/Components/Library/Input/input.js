import { StyledP, StyledLabel } from "../ComponentStyles/ComponentStyles";
import { StyledInput } from "./InputStyles";




function Input({
  onChange,
  type,
  placeholder,
  value,
  color,
  background,
  width,
  placeholderColor,
  labelColor,
  fontSize,
  padding,
  margin,
  border,
  borderRadius,
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
        fontSize={fontSize}
        padding={padding}
        margin={margin}
        border={border}
        borderRadius={borderRadius}
      />
    </StyledLabel>
  );
}

Input.defaultProps = {
type: 'text',
placeholder: 'Enter text',
size: '',
value: '',
color: 'rgba(0,0,0,.6)',
background: '',
width: "200px",
placeholderColor: 'rgba(0,0,0,.6)',
labelColor: 'rgba(255,255,255,.6)',
fontSize: '0.75rem',
padding: '0.5rem',
margin: '.75rem 0',
border: 'none',
borderRadius: '.25rem',


}
export default Input;
