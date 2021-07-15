import styled, { css } from "styled-components";

// Avatar Style rendered by Avatar
const size = "80px";

const sharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #21fce2;
`;

const activeStyles = css`
  background: #262526;
  &:before {
    content: "";
    display: block;
    position: absolute;
    opacity: 0.2;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 50%;
    background: linear-gradient(45deg, #21fce2, #0b8fe0);
  }
  &&:hover {
    cursor: pointer;
  }
`;

const StyledAvatar = styled.span`
  display: block;
  position: relative;
  width: ${size};
  height: ${size};
  padding: 5px;
  border-radius: 50%;
 
  
  ${(props) => props.isActive && activeStyles}
`;

const StyledImage = styled.img`
  ${sharedStyles};
  object-fit: cover;
  
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  ${sharedStyles}

`;

const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 4px solid #262526;
  background: #21fc6b;
`;

export { StyledAvatar, StyledImage, StyledSpan, StyledBadge };
