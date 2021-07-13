// React
import { useState } from "react";

import "./App.css";

// Components imports
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Input from "./Components/Input/input";
import Avatar from "./Components/Avatar/Avatar";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Meter from "./Components/Meter/Meter";

//Styled Components Imports
import { StyledWrapper, Title, SubTitle, StyledP } from "./Styles/Styles";

// Event Handlers
import {
  handleSubmitUser,
  handleEvent,
  handleCancel,
} from "./Assets/eventHandlers/eventHandlers";

// images
import brighton from "./Assets/Images/brighton.jpg";
import MyCard from "./Components/MyCard/MyCard";

// App > StyledWrapper > Title > SubTitle > StyledModalWrapper
function App() {
  // State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({
    firstName: "Learn",
    lastName: "Mern",
    userImage: brighton,
  });

  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isActive, setActive] = useState(false);
  const [hasBadge, setHasBadge] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);

  return (
    <StyledWrapper isFlex flexDirection="column">
      <Navbar
        isFlex
        flexDirection="column"
        primaryColor="rgba(255,255,255,.89)"
        secondaryColor="rgba(131,58,180,1)"
        backgroundColor="#31394d"
      ></Navbar>

      <StyledWrapper
        isFlex
        flexDirection="column"
        height="1000px"
        background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(49,57,77,1) 50%, rgba(131,58,180,1) 100%)"
        borderBottom="2px solid #fff"
        padding="75px 10px 0 10px"
      >
        <Title color="rgba(255,255,255,.89)" padding="1rem">
          Styled-Components
        </Title>
        <SubTitle color="rgba(255,255,255,.89)" padding="0 0 1rem 1rem">
          Navbar
        </SubTitle>
        <StyledP color="rgba(255,255,255,.6)" padding="0 0 1rem 1rem">
          Responsive Navbar with Hamburger and Dropdowns
        </StyledP>
        <MyCard
        userData={userData}
        isActive={isActive}
        setActive={setActive}
        hasBadge={hasBadge}
        setHasBadge={setHasBadge}
        skillsActive={skillsActive}
        setSkillsActive={setSkillsActive}
        src={userData.userImage}
        // Styles
        isFlex
        flexDirection="column"
        // justifyContent="space-between"
        alignItems="center"
        width="275px"
        height="auto"
        borderRadius=".25rem"
        background="#31394d"
        padding="1rem"
        margin="3rem"
      ></MyCard>
      </StyledWrapper>

      <StyledWrapper
        height="1000px"
        background="linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(49,57,77,1) 50%, rgba(0,0,0,1) 100%)"
      ></StyledWrapper>
    </StyledWrapper>
  );
}

export default App;
