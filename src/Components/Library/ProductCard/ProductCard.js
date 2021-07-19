import React from "react";
import Button from "../Button/Button";
import SocialIcon from "../SocialIcon/SocialIcon";
import {
  StyledWrapper,
  StyledImage,
  StyledP,
  Title,
  SubTitle,
} from "../ComponentStyles/ComponentStyles";

function ProductCard({
  src,
  width,
  height,
  color,
  fontTitle,
  fontSubTitle,
  fontBody,
  borderRadius,
  title,
  subTitle,
  body,
}) {
  return (
    <StyledWrapper
      className="productCard"
      isFlex
      background="#31394d"
      width="20rem"
      height="12rem"
      position="relative"
      padding=".5rem"
      justifyContent="space-between"
      borderRadius="0.5rem"
    >
      <StyledWrapper
        isFlex
        width="60%"
        // background="yellow"
        // padding=".5rem"
        height="100%"
        width="80%"
        borderRadius=".5rem"
      >
        <StyledImage src={src} borderRadius=".5rem"></StyledImage>
      </StyledWrapper>
      <StyledWrapper
        isFlex
        // background="pink"
        flexDirection="column"
        height="100%"
        width="100%"
        position="relative"
        right="0px"
        margin="0 0 0 1rem"
      >
        <SubTitle color="rgba(255,255,255,.89)" padding=".5rem 0 0 .5rem">Product Title</SubTitle>

        <StyledWrapper isFlex>
          {" "}
          <SocialIcon icon="star" size="xs" color="yellow"></SocialIcon>
          <SocialIcon icon="star" size="xs" color="yellow"></SocialIcon>
          <SocialIcon icon="star" size="xs" color="yellow"></SocialIcon>
          <SocialIcon icon="star" size="xs" color="yellow"></SocialIcon>
          <SocialIcon icon="star" size="xs" color="yellow"></SocialIcon>
        </StyledWrapper>
        <StyledWrapper isFlex padding="0 .5rem">
          {" "}
          <StyledP color="rgba(255,255,255,.6)" fontSize=".75rem">
            Buy this shit is is so awesome. I hope you enjoy the shit out of it.
          </StyledP>
        </StyledWrapper>

        <StyledWrapper
          //   background="grey"
          isFlex
          alignItems="center"
          justifyContent="space-between"
          position="absolute"
          top="70%"
          width="100%"
        >
          <StyledP padding=".5rem" color="rgba(255,255,255,.6)">
            Price
          </StyledP>
          <Button isFlex width="auto" padding="0 .75rem" margin="0 .5rem">
            Buy Me
          </Button>
        </StyledWrapper>
      </StyledWrapper>
    </StyledWrapper>
  );
}

ProductCard.defaultProps = {
  color: "rgba(0,0,0, .89)",
  fontTitle: "1.25rem",
  fontSubTitle: ".75rem",
  fontBody: ".5rem",
  borderRadius: ".5rem",
  title: "@learnMern",
  subTitle: "React Developer",
  body: "Create React Js Web Apps",
};
export default ProductCard;
