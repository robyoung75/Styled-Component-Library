import styled, { css } from "styled-components";
import { flexStyles } from "./Styles";
const Header = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background-color: ${(props) => props.backgroundColor || "grey"};
  width: ${(props) => props.width || "100%"};
  height: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border: ${(props) => props.border};
  min-width: 275px;
`;

export { Header };
