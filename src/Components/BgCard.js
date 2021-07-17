import React from "react";

import {
  StyledWrapper,
  StyledImage,
  StyledP,
  Title,
  SubTitle,
} from "./Library/ComponentStyles/ComponentStyles";

function BgCard({ src }) {
  return (
    <StyledWrapper
      className="bgCard"
      width="350px"
      height="200px"
      isFlex
      position="relative"
    >
      <StyledImage src={src}></StyledImage>
      <StyledWrapper position="absolute" left="2rem" top="1rem">
        <subTitle color="rgba(0,0,0, .89)" fontSize="1rem">
          React Developer
        </subTitle>
        <Title color="rgba(0,0,0, .89)" fontSize="1.25rem">
          @learnMern
        </Title>
      </StyledWrapper>
    </StyledWrapper>
  );
}

export default BgCard;
