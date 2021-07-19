import React from "react";
import Button from "../Button/Button";
import SocialIcon from "../SocialIcon/SocialIcon";
import {
  StyledWrapper,
  StyledImage,
  StyledP,
  Title,
} from "../ComponentStyles/ComponentStyles";

function ProductCard({
  src,
  price,
  flexDirection,
  productRating,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  starColor,
  fontTitle,
  width,
  height,
  background,
  fontBody,
  borderRadius,
  body,
  product,
}) {
  return (
    <StyledWrapper
      className="productCard"
      isFlex
      background={background}
      width={width}
      borderRadius={borderRadius}
      flexDirection={flexDirection}
    >
      <StyledWrapper
        isFlex
        height={height}
        borderRadius={borderRadius}
        padding=".5rem"
      >
        <StyledImage src={src} borderRadius={borderRadius} imgExp></StyledImage>
      </StyledWrapper>
      <StyledWrapper
        isFlex
        flexDirection="column"
        height={height}
        justifyContent="space-evenly"
        padding=".75rem"
      >
        <StyledWrapper isFlex width="100%" padding=".25rem 0">
          {" "}
          <Title color={primaryColor} fontSize={fontTitle}>
            {product.productTitle}
          </Title>
        </StyledWrapper>

        <StyledWrapper isFlex>
          {" "}
          <SocialIcon
            icon="star"
            size="xs"
            color={product.productRating >= 1 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={product.productRating > 1 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={product.productRating > 2 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={product.productRating > 3 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={product.productRating > 4 ? starColor : tertiaryColor}
          ></SocialIcon>
        </StyledWrapper>
        <StyledWrapper isFlex padding=".25rem 0">
          {" "}
          <StyledP color={secondaryColor} fontSize={fontBody}>
            {body}
          </StyledP>
        </StyledWrapper>

        <StyledWrapper
          isFlex
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <StyledP color={primaryColor} fontSize={fontBody}>
            Price: {price}
          </StyledP>
          <Button isFlex width="60%" fontSize={fontBody} margin="0px">
            Buy Now
          </Button>
        </StyledWrapper>
      </StyledWrapper>
    </StyledWrapper>
  );
}

ProductCard.defaultProps = {
  background: "#31394d",
  width: "20rem",
  height: "12rem",
  primaryColor: "rgba(255,255,255,.89)",
  secondaryColor: "rgba(255,255,255,.6)",
  tertiaryColor: "rgba(255,255,255,.38)",
  starColor: "#ffcd3c",
  fontTitle: "1.25rem",
  fontSubTitle: ".75rem",
  fontBody: ".75rem",
  borderRadius: ".5rem",
  title: "Product Title",
  body: "Product description goes here. Please buy this great item",
  price: "$10.00",
};
export default ProductCard;
