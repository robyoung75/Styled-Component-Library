import React from "react";
import Button from "../Button/Button";

// Styled Components
import {
  StyledImage,
  StyledP,
  StyledWrapper,
  SubTitle,
  Title,
} from "../ComponentStyles/ComponentStyles";

function ProductCardSlide({
  // image
  src,
  imageHeight,
  imageWidth,
  borderRadiusImage,

  // colors
  primaryColor,
  secondaryColor,
  tertiaryColor,
  cardBackground,
  dropdownBackground,

  // Styles
  width,
  height,
  padding,
  fontSize,
  transition,
  border,

  // flexStyles
  justifyContent,
  alignItems,

  // textData
  body,
  title,
  subTitle,
  buttonTxt,
}) {
  return (
    <StyledWrapper className="productCardSlide">
      <StyledWrapper
        className="productCardSlide__container"
        position="relative"
        isFlex
      >
        <StyledWrapper
          className="productCard__container__card"
          position="relative"
          cursor="pointer"
          hover
        >
          <StyledWrapper
            className="productCard__container__card__face1"
            width={width}
            height={height}
            transition={transition}
            position="relative"
            background={cardBackground}
            isFlex
            justifyContent={justifyContent}
            alignItems={alignItems}
            zIndex="1"
            transform="translateY(50%)"
            borderRadius={"0.5rem"}
            border={border}
          >
            <StyledWrapper
              className="productCard__container__card__face1__content"
              opacity="0.2"
              transition={transition}
              isFlex
              flexDirection="column"
              justifyContent={justifyContent}
              alignItems={alignItems}
            >
              <StyledImage
                src={src}
                height={imageHeight}
                width={imageWidth}
                borderRadius={borderRadiusImage}
              />
              <Title color={primaryColor}>{title}</Title>
              <SubTitle textAlign="center" color={secondaryColor}>
                {subTitle}
              </SubTitle>
            </StyledWrapper>
          </StyledWrapper>

          <StyledWrapper
            className="productCard__container__card__face2"
            width={width}
            height={height}
            transition={transition}
            position="relative"
            background={dropdownBackground}
            isFlex
            justifyContent={justifyContent}
            alignItems={alignItems}
            padding={padding}         
            boxShadow="0 20px 50px rgba(0,0,0,0.8)"
            transform="translateY(-50%)"
            borderRadius={"0.5rem"}
          >
            <StyledWrapper
              className="productCard__container__card__face2__content"
              transition={transition}
            >
              <StyledP fontSize={fontSize} padding={padding}>
                {body}
              </StyledP>
              <Button margin="1rem .5rem 0 .5rem" fontSize={fontSize}>
                {buttonTxt}
              </Button>
            </StyledWrapper>
          </StyledWrapper>
        </StyledWrapper>
      </StyledWrapper>
    </StyledWrapper>
  );
}

ProductCardSlide.defaultProps = {
  // colors
  primaryColor: "rgba(255,255,255,.89)",
  secondaryColor: "rgba(255,255,255,.6)",
  tertiaryColor: "rgba(255,255,255,.38)",
  cardBackground: "#31394d",
  dropdownBackground: "rgba(255,255,255,.89)",

  // styles
  width: "300px",
  height: "200px",
  padding: "0.5rem",
  fontSize: ".75rem",
  transition: "0.5s",
  border: "1px solid background",

  // flexStyles
  justifyContent: "center",
  alignItems: "center",

  // image
  imageWidth: "80px",
  imageHeight: "80px",
  borderRadiusImage: "50%",

  // textData
  title: "@learnMern",
  subTitle: "React Developer",
  buttonTxt: "Learn More",
  body: "Lorem ipsum dolor sit amet, verear fabellas corrumpit vix no, ne has omnis sanctus sensibus, prima nihil meliore ad per. Est cu qualisque persecuti. Autem imperdiet gubergren sed ne, an.",
};

export default ProductCardSlide;
