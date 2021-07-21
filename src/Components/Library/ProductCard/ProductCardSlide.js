import React from "react";

// Styled Components
import {
  StyledImage,
  StyledP,
  StyledWrapper,
  SubTitle,
} from "../ComponentStyles/ComponentStyles";

function ProductCardSlide({ primaryColor, background, width, height, userData }) {
  return (
    <StyledWrapper
      className="container"
      position="relative"
      // background="red"
      isFlex
    >
      <StyledWrapper
        className="card"
        position="relative"
        cursor="pointer"
        hover
      >
        <StyledWrapper
          className="face1"
          width={width}
          height={height}
          transition="0.5s"
          position="relative"
          background={background}
          isFlex
          justifyContent="center"
          alignItems="center"
          zIndex="1"
          transform="translateY(100px)"
          borderRadius="0.5rem"
          border="1px solid background"
        >
          <StyledWrapper className="content" opacity="0.2" transition="0.5s">
            <StyledImage
              src={userData.userImage}
              height="80px"
              width="80px"
              borderRadius="50%"
              
            />
            <SubTitle textAlign="center" color={primaryColor}>Design</SubTitle>
          </StyledWrapper>
        </StyledWrapper>

        <StyledWrapper
          className="face2"
          width={width}
          height={height}
          transition="0.5s"
          position="relative"
          background="#fff"
          isFlex
          justifyContent="center"
          alignItems="center"
          padding="20px"
          boxSizing="border-box"
          boxShadow="0 20px 50px rgba(0,0,0,0.8)"
          transform="translateY(-100px)"
          borderRadius="0.5rem"
        >
          <StyledWrapper className="content" transition="0.5s">
            <StyledP margin="0" padding="0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </StyledP>
            <a
              href="#"
              style={{
                margin: "15px 0 0",
                display: "inline-block",
                textDecoration: "none",
                color: "black",
                padding: "5px",
                border: "1px solid grey",
              }}
            >
              Read More
            </a>
          </StyledWrapper>
        </StyledWrapper>
      </StyledWrapper>
    </StyledWrapper>
  );
}

ProductCardSlide.defaultProps = {
  primaryColor: "rgba(255,255,255,.89)",
  background: "#31394d",
  width: "300px",
  height: "200px",
};

export default ProductCardSlide;
