import { useState } from "react";

import Hamburger from "./Hamburger";

import { StyledWrapper } from "./HamburgerStyles";

export default function App() {
  const [isActive, setIsActive] = useState(true);

  const handleSetActive = (e) => {
    e.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };
  return (
    <StyledWrapper
      className="App"
      isFlex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>@LearnMern</h1>
      <h2>Styled Components: Hamburger</h2>
      <Hamburger
        isFlex
        isActive={isActive}
        backgroundColor="dodgerblue"
        onClick={handleSetActive}
        width="50px"
        height="50px"
        right="50px"
        top="50px"
      />
    </StyledWrapper>
  );
}
