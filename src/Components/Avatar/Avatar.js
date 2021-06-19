// rendered in App as a child of Card

import {
  StyledAvatar,
  StyledImage,
  StyledSpan,
  StyledBadge,
} from "../../Styles/AvatarStyles";

function Avatar({ isActive, hasBadge, name, src }) {
  return (
    <StyledAvatar isActive={isActive}>
      {hasBadge && <StyledBadge />}
      {src ? (
        <StyledImage src={src} alt={name} />
      ) : (
        <StyledSpan isActive={isActive}>{name}</StyledSpan>
      )}
    </StyledAvatar>
  );
}

export default Avatar;
