import styled, { css } from "styled-components";
import { flexStyles } from "../Styles/Styles";

// StyledCard rendered by > App > Modal
const StyledCard = styled.div`
  ${(props) => props.isFlex && flexStyles};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius};
`;

export { StyledCard };
