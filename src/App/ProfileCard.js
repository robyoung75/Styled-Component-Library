import { useState } from "react";

import styled, { css } from "styled-components";

import Button from "../Components/Button/Button";
import Avatar from "../Components/Avatar/Avatar";
import Meter from "../Components/Meter/Meter";
import SocialIcon from "../Components/SocialIcon/SocialIcon";

import { Title, StyledP, StyledWrapper } from "../Styles/Styles";

import { handleEvent } from "../Assets/eventHandlers/eventHandlers";

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

function ProfileCard({
  userData,
  isActive,
  setActive,
  src,
  hasBadge,
  setHasBadge,
  skillsActive,
  setSkillsActive,
  hasImg,
  setHasImg,
}) {
  return (
    <StyledWrapper
      isFlex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="3rem"
      padding="1rem"
      background="#31394d"
      borderRadius=".25rem"
      width="275px"
      height="auto"
    >
      {/* Avatar props: isActive, hasBadge, name, src */}

      <Avatar
        src={hasImg ? src : null}
        isActive={isActive}
        hasBadge={hasBadge}
        name={userData.firstName}
      />
      <Title color="rgba(255,255,255,.89)">
        {userData.firstName + userData.lastName}
      </Title>
      <StyledP color="rgba(255,255,255,.6)">REACT DEVELOPER</StyledP>
      <StyledP color="rgba(255,255,255,.6)" fontSize=".75rem">
        Create React Js Web Apps
      </StyledP>
      <StyledP color="rgba(255,255,255,.6)" fontSize=".75rem">
        @learnMern
      </StyledP>
      <StyledWrapper isFlex justifyContent="space-evenly">
        <Button
          background="linear-gradient(to bottom right, #8162ce, #f54ba5)"
          fontSize="1rem"
          height="40px"
          padding="0.25rem, 1rem"
          border="none"
          borderRadius="40px"
          boxShadow="0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16)"
          color="rgba(255,255,255,.89)"
          onClick={(e) => {
            e.preventDefault();
            handleEvent(isActive, setActive);
          }}
        >
          {isActive ? "notActive" : "setActive"}
        </Button>
        <Button
          background="linear-gradient(to bottom right, #8162ce, #f54ba5)"
          fontSize="1rem"
          height="40px"
          padding="0.25rem, 1rem"
          border="none"
          borderRadius="40px"
          boxShadow="0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16)"
          color="rgba(255,255,255,.89)"
          onClick={(e) => {
            e.preventDefault();
            handleEvent(hasBadge, setHasBadge);
          }}
        >
          {hasBadge ? "noBadge" : "hasBadge"}
        </Button>
      </StyledWrapper>
      <StyledWrapper
        isFlex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button
          background="linear-gradient(to bottom right, #8162ce, #f54ba5)"
          fontSize="1rem"
          height="40px"
          padding="0.25rem, 1rem"
          border="none"
          borderRadius="40px"
          boxShadow="0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16)"
          color="rgba(255,255,255,.89)"
          onClick={(e) => {
            e.preventDefault();
            handleEvent(hasImg, setHasImg);
          }}
        >
          {hasImg ? "noImg" : "setImg"}
        </Button>
        <Button
          background="linear-gradient(to bottom right, #8162ce, #f54ba5)"
          fontSize="1rem"
          height="40px"
          padding="0.25rem, 1rem"
          border="none"
          borderRadius="40px"
          boxShadow="0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16)"
          color="rgba(255,255,255,.89)"
          onClick={(e) => {
            e.preventDefault();
            handleEvent(skillsActive, setSkillsActive);
          }}
        >
          {!skillsActive ? "Skills" : "Close"}
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
        <StyledP
          color="rgba(255,255,255,.6)"
          textAlign="center"
          fontSize=".5rem"
        >
          All credit goes to learnMern - Copyright 2021 learnMern - Designed by
          learnMern
        </StyledP>
      </StyledWrapper>
    </StyledWrapper>
  );
}

export default ProfileCard;
