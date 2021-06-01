import React from "react";

import { StyledButton } from "../../Styles/Styles";

function Button({ primary, color, children, onClick }) {
  return (
    <div>
      <StyledButton color={color} primary={primary} onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
}

export default Button;
