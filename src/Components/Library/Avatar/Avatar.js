// rendered in App as a child of Card

import { StyledP } from "../ComponentStyles/ComponentStyles";
import {
  StyledAvatar,
  StyledImage,
  StyledSpan,
  StyledBadge,
} from "./AvatarStyles";

function Avatar({
  isActive,
  hasBadge,
  name,
  src,
  size,
  background,
  backgroundActive,
  backgroundActiveGradient,
  backgroundBadge,
  border,
  color,
}) {
  return (
    <StyledAvatar
      isActive={isActive}
      size={size}
      backgroundActive={backgroundActive}
      backgroundActiveGradient={backgroundActiveGradient}
    >
      {hasBadge && (
        <StyledBadge border={border} backgroundBadge={backgroundBadge} />
      )}
      {src ? (
        <StyledImage src={src} alt={name} background={background}></StyledImage>
      ) : (
        <StyledSpan isActive={isActive} background={background}>
          <StyledP color={color} fontSize=".75rem">
            @learnMern
          </StyledP>
        </StyledSpan>
      )}
    </StyledAvatar>
  );
}

Avatar.defaultProps = {
  size: "80px",
  background: "",
  backgroundActive: "#262526",
  backgroundActiveGradient: "linear-gradient(45deg, #21fce2, #0b8fe0)",
  backgroundBadge: "#7fff00",
  border: "3px solid #262526",
  color: "rgba(255,255,255,.6)",
};
export default Avatar;
