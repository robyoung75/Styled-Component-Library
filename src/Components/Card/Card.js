import React from "react";
import styled, { css } from "styled-components";

const flexStyles = css`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: ${(props) => props.justifyContent};
`;

const StyledCard = styled.div`
${(props) => props.isFlex && flexStyles};
margin: ${(props) => props.margin};
padding: ${(props) => props.padding};
background: ${(props) => props.background};
border: ${(props) => props.border};
width: ${(props) => props.width};
border-radius: 0.75rem;
`;

function Card({
  children,
  isFlex,
  flexDirection,
  alignItems,
  justifyContent,
  margin = "0 0 1rem",
  padding = "1rem",
  background = "#100F10",
  border,
  width,
}) {

  return (
    <StyledCard
      isFlex={isFlex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      background={background}
      border={border}
      width={width}
    >
      {children}
    </StyledCard>
  );
}

export default Card;
