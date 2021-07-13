import styled, { css } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

// media query for each device size
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;

// shared styles...primarily for divs
const sharedStyles = css`
  ${(props) => props.isFlex && flexStyles};

  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.background};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  display: ${(props) => props.display};
`;

// shared styles for Typography, p, h1 - h6
const sharedTypography = css`
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin || "0px"};
  font-size: ${(props) => props.fontSize};
`;

// rendered by > App > > Modal
const StyledWrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  ${sharedStyles}
`;

// rendered by > App >
const Title = styled.h1`
  ${sharedTypography}
`;
// rendered by > App >
const SubTitle = styled.h3`
  ${sharedTypography}
`;

// rendered by > Modal > Input
const StyledP = styled.p`
  ${sharedTypography}
`;

const StyledLabel = styled.label`
  ${(props) => props.isFlex && flexStyles};
`;

export {
  flexStyles,
  StyledWrapper,
  Title,
  SubTitle,
  StyledP,
  StyledLabel,
  size,
  device,
  sharedStyles,
};
