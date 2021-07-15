import styled, { css } from "styled-components";
import { flexStyles, sharedStyles } from "./Styles";
const Header = styled.div`
  ${(props) => props.isFlex && flexStyles};
${sharedStyles}
`;

export { Header };
