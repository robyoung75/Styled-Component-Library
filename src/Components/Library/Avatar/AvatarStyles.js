import styled, { css } from "styled-components";

// Avatar Style rendered by Avatar


const sharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${props => props.background};
`;

const activeStyles = css`
  background: ${props => props.backgroundActive};
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
    background: ${props => props.backgroundActiveGradient};
  }
  &&:hover {
    cursor: pointer;
  }
`;

const StyledAvatar = styled.span`
  display: block;
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
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
  right: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: ${props => props.border};
  background: ${props => props.backgroundBadge};
`;

export { StyledAvatar, StyledImage, StyledSpan, StyledBadge };
