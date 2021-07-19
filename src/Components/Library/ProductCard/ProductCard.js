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
  productRating,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  starColor,
  fontTitle,
  width,
  height,
  background,
  color,
  fontSubTitle,
  fontBody,
  borderRadius,
  title,
  body,
  padding,
}) {
  return (
    <StyledWrapper
      className="productCard"
      isFlex
      background={background}
      width={width}
      height={height}
      position="relative"
      padding={padding}
      justifyContent="space-between"
      borderRadius={borderRadius}
    >
      <StyledWrapper
        isFlex
        height="100%"
        width="80%"
        borderRadius={borderRadius}
      >
        <StyledImage src={src} borderRadius={borderRadius} imgExp></StyledImage>
      </StyledWrapper>
      <StyledWrapper
        isFlex
        flexDirection="column"
        height="100%"
        position="relative"
        right="0px"
        margin="0 0 0 1rem"
      >
        <Title
          color={primaryColor}
          padding=".5rem 0 0 .5rem"
          fontSize={fontTitle}
        >
          {title}
        </Title>

        <StyledWrapper isFlex>
          {" "}
          <SocialIcon
            icon="star"
            size="xs"
            color={productRating >= 1 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={productRating > 1 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={productRating > 2 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={productRating > 3 ? starColor : tertiaryColor}
          ></SocialIcon>
          <SocialIcon
            icon="star"
            size="xs"
            color={productRating > 4 ? starColor : tertiaryColor}
          ></SocialIcon>
        </StyledWrapper>
        <StyledWrapper isFlex padding="0 .5rem">
          {" "}
          <StyledP color={secondaryColor} fontSize={fontBody}>
            {body}
          </StyledP>
        </StyledWrapper>

        <StyledWrapper
          isFlex
          alignItems="center"
          justifyContent="space-between"
          position="absolute"
          top="70%"
          width="100%"
        >
          <StyledP padding=".5rem" color={primaryColor} fontSize={fontBody}>
            Price: {price}
          </StyledP>
          <Button
            isFlex
            width="80%"
            padding="0 .75rem"
            margin="0 .25rem"
            fontSize={fontBody}
          >
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
  padding: ".75rem",
  primaryColor: "rgba(255,255,255,.89)",
  secondaryColor: "rgba(255,255,255,.6)",
  tertiaryColor: "rgba(255,255,255,.38)",
  starColor: "#ffcd3c",
  fontTitle: "1.25rem",
  fontSubTitle: ".75rem",
  fontBody: ".75rem",
  borderRadius: ".5rem",
  title: "Product Title",
  subTitle: "React Developer",
  body: "Product description goes here. Please buy this great item",
  price: "$10.00",
};
export default ProductCard;
