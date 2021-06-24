import styled, { css } from "styled-components";

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;
// rendered by > App > > Modal
const StyledWrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || " 0"};
  margin: ${(props) => props.margin || "0"};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  right: ${props => props.right};
  top: ${props => props.top};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};

`;

// rendered by > App >
const Title = styled.h1`
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
  text-align: ${(props) => props.textAlign};
`;
// rendered by > App >
const SubTitle = styled.h3`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`;

// rendered by > Modal > Input
const StyledP = styled.p`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  text-align: ${(props) => props.textAlign};
`;

// Navbar Styles


export {
  flexStyles,
  StyledWrapper,
  Title,
  SubTitle,
  StyledP,
  
};
