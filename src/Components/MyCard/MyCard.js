import { useState } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Meter from "../Meter/Meter";
import SocialIcon from "../SocialIcon/SocialIcon";

import { Title, StyledP, StyledWrapper } from "../../Styles/Styles";

import { handleEvent } from "../../Assets/eventHandlers/eventHandlers";

function MyCard({
  isFlex,
  flexDirection,
  alignItems,
  justifyContent,
  userData,
  isActive,
  setActive,
  src,
  hasBadge,
  setHasBadge,
  margin,
  padding,
  background,
  border,
  width,
  height,
  borderRadius,
}) {
  let meterStyle = {
    webkitAppearance: "none" /* Reset appearance */,
    border: "1px solid #ccc",
    borderRadius: "3px",

    background: "blue",
    boxShadow: "0 5px 5px -5px #333 inset",
  };
  return (
    <Card
      isFlex={isFlex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      border={border}
      width={width}
      height={height}
    >
      {/* Avatar props: isActive, hasBadge, name, src */}

      <Avatar
        src={src ? src : null}
        isActive={isActive}
        hasBadge={hasBadge}
        name={userData.firstName}
      />
      <Title color="#fff">{userData.firstName + userData.lastName}</Title>
      <StyledP color="#fff">REACT DEVELOPER</StyledP>
      <StyledP color="#fff" fontSize=".75rem">
        Create React Js Web Apps
      </StyledP>
      <StyledP color="#fff" fontSize=".75rem">
        @learnMern
      </StyledP>
      <StyledWrapper isFlex justifyContent="space-evenly">
        <Button
          primary
          color="red"
          onClick={(e) => {
            e.preventDefault();
            handleEvent(isActive, setActive);
          }}
        >
          setActive
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleEvent(hasBadge, setHasBadge);
          }}
        >
          setBadge
        </Button>
      </StyledWrapper>
      <StyledWrapper
        isFlex
        justifyContent="space-evenly"
        borderBottom="2px solid grey"
        padding="1rem"
      >
        {" "}
        <SocialIcon icon="instagram" color="#fff" size="lg" />
        <SocialIcon icon="facebook" color="#fff" size="lg" />
        <SocialIcon icon="gitHub" color="#fff" size="lg" />
        <SocialIcon icon="linkedin" color="#fff" size="lg" />
      </StyledWrapper>
      <StyledWrapper
        isFlex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="2rem 0"
      >
        <Meter label="Html" value={8} width="250px" height="25px">
          <StyledP>80%</StyledP>
        </Meter>
        <Meter label="css" value={7} width="250px" height="25px">
          <StyledP>70%</StyledP>
        </Meter>
        <Meter label="JavaScript" value={6} width="250px" height="25px">
          <StyledP>60%</StyledP>
        </Meter>
        <Meter label="React" value={8} width="250px" height="25px">
          <StyledP>80%</StyledP>
        </Meter>
      </StyledWrapper>
    </Card>
  );
}

export default MyCard;
