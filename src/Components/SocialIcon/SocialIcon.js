import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
}) {
  return (
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
  );
}

export default SocialIcon;
