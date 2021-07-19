import styled, { css } from "styled-components";

import Button from "./Library/Button/Button";
import Avatar from "./Library/Avatar/Avatar";
import Meter from "./Library/Meter/Meter";
import SocialIcon from "./Library/SocialIcon/SocialIcon";

import {
  Title,
  StyledP,
  StyledWrapper,
} from "./Library/ComponentStyles/ComponentStyles";

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
  avatarActive,
  setAvatarActive,
  src,
  hasBadge,
  setHasBadge,
  hasImg,
  setHasImg,
  skillsActive,
  setSkillsActive,
}) {
  return (
    <StyledWrapper
      isFlex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="1rem"
      background="#31394d"
      borderRadius=".5rem"
      width="275px"
      height="auto"
    >
      {/* Avatar props: isActive, hasBadge, name, src */}

      <Avatar
        src={hasImg ? src : null}
        isActive={avatarActive}
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
          margin="1rem .5rem"
          onClick={(e) => {
            e.preventDefault();
            handleEvent(avatarActive, setAvatarActive);
          }}
        >
          {avatarActive ? "Not Active" : "Active"}
        </Button>
        <Button
          margin="1rem .5rem"
          onClick={(e) => {
            e.preventDefault();
            handleEvent(hasBadge, setHasBadge);
          }}
        >
          {hasBadge ? "No Badge" : "Badge"}
        </Button>
      </StyledWrapper>
      <StyledWrapper
        isFlex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleEvent(hasImg, setHasImg);
          }}
        >
          {hasImg ? "No Image" : "Image"}
        </Button>
        <Button
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
        <SocialIcon icon="instagram" />
        <SocialIcon icon="facebook" />
        <SocialIcon icon="gitHub" />
        <SocialIcon icon="linkedin" />
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
          <Meter label="Html" value={8}>
            80%
          </Meter>
          <Meter label="css" value={7}>
            70%
          </Meter>
          <Meter label="JavaScript" value={6}>
            60%
          </Meter>
          <Meter label="React" value={8}>
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
