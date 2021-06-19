
// rendered in App as a child of Card and in Modal

import { StyledButton } from "../../Styles/ButtonStyles";

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
