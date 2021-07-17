import styled, { css } from "styled-components";
import { flexStyles } from "../../Styles/Styles";

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Enter text",
  size: props.size || "",
}))`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;

export { StyledInput };
