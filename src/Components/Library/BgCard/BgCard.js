import React from "react";

import {
  StyledWrapper,
  StyledImage,
  StyledP,
  Title,
  SubTitle,
} from "../ComponentStyles/ComponentStyles";

function BgCard({
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
      className="bgCard"
      width={width}
      height={height}
      isFlex
      position="relative"
    >
      <StyledImage
        src={src}
        alt="Background"
        borderRadius={borderRadius}
      ></StyledImage>
      <StyledWrapper
        position="absolute"
        left="1rem"
        top="1rem"
        background="rgba(255,255,255,.5)"
        padding=".5rem"
        borderRadius={borderRadius}
      >
        <SubTitle color={color} fontSize={fontSubTitle}>
          {subTitle}
        </SubTitle>
        <Title color={color} fontSize={fontTitle}>
          {title}
        </Title>
        <StyledP color={color} fontSize={fontBody}>
          {body}
        </StyledP>
      </StyledWrapper>
    </StyledWrapper>
  );
}

BgCard.defaultProps = {
  width: "20rem",
  height: "12rem",
  color: "rgba(0,0,0, .89)",
  fontTitle: "1.25rem",
  fontSubTitle: ".75rem",
  fontBody: ".5rem",
  borderRadius: ".5rem",
  title: "@learnMern",
  subTitle: "React Developer",
  body: "Create React Js Web Apps",
};

export default BgCard;
