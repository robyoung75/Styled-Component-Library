import styled, { css } from "styled-components";


const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Enter text",

  size: props.size || "",
}))`
  font-size: 0.75rem;
  padding: 0.5rem;
  margin: 0.75rem 0;
  color: ${(props) => props.color || "palevioletred"};
  background: ${(props) => props.background || "papayawhip"};
  border: none;
  border-radius: 0.25rem;
  width: ${(props) => props.width || "200px"};
  ::placeholder {
    color: ${(props) => props.color || "palevioletred"};
  }
`;

const StyledLabel = styled.label``;

export {StyledInput, StyledLabel}