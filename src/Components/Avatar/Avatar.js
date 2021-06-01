import {
  StyledAvatar,
  StyledImage,
  StyledSpan,
  StyledBadge,
} from "../../Styles/Styles";

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
