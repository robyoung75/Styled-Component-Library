import styled from "styled-components";

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Enter text",

  size: props.size || "",
}))`
  font-size: 0.75rem;
  padding: 0.5rem;
  margin: 0.75rem;
  color: ${(props) => props.color || "palevioletred"};
  background: ${(props) => props.background || "papayawhip"};
  border: none;
  border-radius: 0.25rem;
  width: ${(props) => props.width || "80%"};
  ::placeholder {
    color: ${(props) => props.color || "palevioletred"};
  }
`;

export default function Input({
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
