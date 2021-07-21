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

// activeStyles
const activeProductCard = css`
  // ProductCardFlip
  ${(props) => (props.imgTrans ? "&:hover {opacity: .89}" : null)};

  // ProductCardSlide
  ${(props) =>
    props.hover
      ? "&:hover .face1 {transform: translateY(0); background: linear-gradient(to bottom right, #8162ce, #f54ba5); border-radius: 0.5rem 0.5rem 0 0}"
      : null}
  ${(props) => (props.hover ? "&:hover .content {opacity: 1}" : null)}
  ${(props) =>
    props.hover
      ? "&:hover .face2 {transform: translateY(0); border-radius: 0 0 0.5rem 0.5rem}"
      : null}
`;

// shared styles...primarily for divs
const sharedStyles = css`
  ${(props) => props.isFlex && flexStyles};
  ${(props) => props.imgTrans && activeProductCard};
  ${(props) => props.hover && activeProductCard};


  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom}
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  display: ${(props) => props.display};
  transform: ${(props) => props.transform};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  transition-delay: ${(props) => props.transitionDelay};
  transition: ${(props) => props.transition};
  cursor: ${(props) => props.cursor};
 

`;

const sharedTypography = css`
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
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

const StyledImage = styled.img`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  border-radius: ${(props) => props.borderRadius};
  object-fit: cover;
  opacity: ${(props) => props.opacity || "1"};
  border: ${props => props.border};

  ${(props) =>
    props.imgExp ? "&:hover {transform: scale(2); z-index: 1}" : null}
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
  StyledImage,
};
