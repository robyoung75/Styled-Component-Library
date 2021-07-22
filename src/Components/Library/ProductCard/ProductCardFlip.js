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
        transition="1s"
        transitionDelay=".5s"
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
          <StyledP color={secondaryColor} fontSize=".75rem">{body}</StyledP>
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
  body: "Lorem ipsum dolor sit amet, verear fabellas corrumpit vix no, ne has omnis sanctus sensibus, prima nihil meliore ad per. Est cu qualisque persecuti. Autem imperdiet gubergren sed ne, an.",
  price: "$10.00",
};

export default ProductCardFlip;
