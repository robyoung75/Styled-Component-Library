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
  width: ${(props) => props.width};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
`;
// rendered by > App
const StyledModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 50%;
  height: auto;
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
// rendered by > Modal
const Header = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background-color: ${(props) => props.backgroundColor || "grey"};
  width: ${(props) => props.width || "100%"};
  height: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border: ${(props) => props.border};
  min-width: 275px;
`;

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
// Styled Button rendered by > App > Modal
const StyledButton = styled.button`
  background: ${(props) =>
    props.primary && props.color
      ? props.color
      : props.primary
      ? "grey"
      : "papayawhip"};
  color: ${(props) =>
    props.primary && props.color
      ? "papayawhip"
      : props.primary
      ? "papayawhip"
      : props.color
      ? props.color
      : "grey"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => (props.color ? props.color : "grey")};
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.primary && props.color
        ? "papayawhip"
        : props.primary
        ? "papayawhip"
        : props.color
        ? props.color
        : "grey"};
    color: ${(props) =>
      props.primary && props.color
        ? props.color
        : props.color
        ? "papayawhip"
        : props.primary
        ? "grey"
        : "papayawhip"};
  }
`;

// StyledInput rendered by > App > Modal
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
// Avatar Style rendered by Avatar
const size = "80px";

const sharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #21fce2;
`;

const activeStyles = css`
  background: #262526;
  &:before {
    content: "";
    display: block;
    position: absolute;
    opacity: 0.2;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 50%;
    background: linear-gradient(45deg, #21fce2, #0b8fe0);
  }
  &&:hover {
    cursor: pointer;
  }
`;

const StyledAvatar = styled.span`
  display: block;
  position: relative;
  width: ${size};
  height: ${size};
  padding: 5px;
  border-radius: 50%;

  ${(props) => props.isActive && activeStyles}
`;

const StyledImage = styled.img`
  ${sharedStyles};
  object-fit: cover;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  ${sharedStyles}
`;

const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 4px solid #262526;
  background: #21fc6b;
`;

export {
  StyledWrapper,
  Title,
  SubTitle,
  StyledP,
  Header,
  StyledButton,
  StyledCard,
  StyledInput,
  StyledAvatar,
  StyledImage,
  StyledSpan,
  StyledBadge,
  StyledModalWrapper,
};
