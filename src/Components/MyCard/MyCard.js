import { useState } from "react";

import styled, { css } from "styled-components";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Meter from "../Meter/Meter";
import SocialIcon from "../SocialIcon/SocialIcon";

import { Title, StyledP, StyledWrapper } from "../../Styles/Styles";

import { handleEvent } from "../../Assets/eventHandlers/eventHandlers";

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;
const Dropdown = styled.div`
  ${(props) => props.isFlex && flexStyles}
  background-color: ${(props) => props.backgroundColor || "grey"};

  margin: 0;
  width: 100%;

  transform: ${(props) =>
    props.skillsActive ? "translateY(0%)" : "translateY(-110%)"};

  ${(props) => (props.skillsActive ? "display: block" : "display: none")}
`;

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
  skillsActive,
  setSkillsActive,
  margin,
  padding,
  background,
  border,
  width,
  height,
  borderRadius,
}) {
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
      <StyledWrapper isFlex justifyContent="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleEvent(skillsActive, setSkillsActive);
          }}
        >
          Skills
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
      <Dropdown backgroundColor="#31394d" skillsActive={skillsActive}>
        <StyledWrapper
          isFlex
          flexDirection="column"
          alignItems="center"
          borderBottom="2px solid grey"
          padding="1rem"
        >
          {" "}
          <Meter
            label="Html"
            value={8}
            width="250px"
            height="25px"
            fontSize=".75rem"
          >
            80%
          </Meter>
          <Meter
            label="css"
            value={7}
            width="250px"
            height="25px"
            fontSize=".75rem"
          >
            70%
          </Meter>
          <Meter
            label="JavaScript"
            value={6}
            width="250px"
            height="25px"
            fontSize=".75rem"
          >
            60%
          </Meter>
          <Meter
            label="React"
            value={8}
            width="250px"
            height="25px"
            fontSize=".75rem"
          >
            80%
          </Meter>
        </StyledWrapper>
      </Dropdown>

      <StyledWrapper
        isFlex
        justifyContent="center"
        alignItems="center"
        padding="1rem"
      >
        <StyledP color="#fff" textAlign="center" fontSize=".5rem">
          All credit goes to learnMern - Copyright 2021 learnMern - Designed by
          learnMern
        </StyledP>
      </StyledWrapper>
    </Card>
  );
}

export default MyCard;
