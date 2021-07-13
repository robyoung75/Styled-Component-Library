import styled, { css } from "styled-components";
import { flexStyles, sharedStyles } from "../Styles/Styles";

// StyledCard rendered by > App > Modal
const StyledCard = styled.div`
  ${(props) => props.isFlex && flexStyles};
  ${sharedStyles}
  
`;

export { StyledCard };
