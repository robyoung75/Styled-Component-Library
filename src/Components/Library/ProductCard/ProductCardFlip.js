import React from "react";
import Button from "../Button/Button";

import {
  StyledImage,
  StyledP,
  StyledWrapper,
  Title,
} from "../ComponentStyles/ComponentStyles";
import ProductCard from "./ProductCard";

function ProductCardFlip({
  src,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  title,
  body,
  price,
}) {
  return (
    <StyledWrapper
      isFlex
      position="relative"
      width="20rem"
      height="12rem"
      flexDirection="column"
    >
      <StyledWrapper
        isFlex
        imgTrans
        position="absolute"
        width="100%"
        height="100%"
        background="#31394d"
        transitionDelay=".3s"
        borderRadius=".5rem"
        zIndex="10"
        opacity="0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding=".75rem"
      >
        <Title color={primaryColor}>{title}</Title>
        <StyledWrapper isFlex width="80%" margin=".5rem">
          {" "}
          <StyledP color={secondaryColor}>{body}</StyledP>
        </StyledWrapper>

        <Button>Buy Now</Button>
      </StyledWrapper>

      <StyledWrapper isFlex width="100%" height="100%" position="relative">
        <StyledImage src={src} borderRadius=".5rem" opacity=".89"></StyledImage>
      </StyledWrapper>
    </StyledWrapper>
  );
}

ProductCardFlip.defaultProps = {
  primaryColor: "rgba(255,255,255,.89)",
  secondaryColor: "rgba(255,255,255,.6)",
  tertiaryColor: "rgba(255,255,255,.38)",
  title: "Product Title",
  subTitle: "React Developer",
  body: "Product description goes here. Please buy this great item",
  price: "$10.00",
};

export default ProductCardFlip;
