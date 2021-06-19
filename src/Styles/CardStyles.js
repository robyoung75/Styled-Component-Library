import styled, { css } from "styled-components";
import {flexStyles} from '../Styles/Styles'

// StyledCard rendered by > App > Modal
const StyledCard = styled.div`
  ${(props) => props.isFlex && flexStyles};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.minHeight || "400px"};
  border-radius: ${(props) => props.borderRadius};
  min-width: 275px;
`;

export {StyledCard}