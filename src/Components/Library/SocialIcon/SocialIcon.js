import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { StyledWrapper } from "../ComponentStyles/ComponentStyles";

function SocialIcon({
  icon,
  color,
  rotation,
  flip,
  spin,
  pulse,
  border,
  pull,
  transform,
  size,
  justifyContent,
  alignItems,
  padding,
}) {
  return (
    <StyledWrapper
      isFlex
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
    >
      {" "}
      <FontAwesomeIcon
        icon={
          icon == "instagram"
            ? faInstagram
            : icon == "facebook"
            ? faFacebook
            : icon == "gitHub"
            ? faGithub
            : icon == "linkedin"
            ? faLinkedin
            : null
        }
        color={color}
        rotation={rotation}
        flip={flip}
        spin={spin}
        pulse={pulse}
        border={border}
        pull={pull}
        transform={transform}
        size={size}
      />
    </StyledWrapper>
  );
}

SocialIcon.defaultProps = {
  icon: "gitHub",
  color: "rgba(255,255,255,.6)",
  size: "lg",
  justifyContent: "center",
  alignItems: "center",
  padding: ".5rem",
};

export default SocialIcon;
