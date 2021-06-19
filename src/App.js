// React
import { useState } from "react";

// Components imports
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Input from "./Components/Input/input";
import Avatar from "./Components/Avatar/Avatar";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";

//Styled Components Imports
import { StyledWrapper, Title, SubTitle, StyledP } from "./Styles/Styles";

// Event Handlers
import {
  handleSubmitUser,
  handleEvent,
  handleCancel
} from "./Assets/eventHandlers/eventHandlers";

// images
import brighton from "./Assets/Images/brighton.jpg";

// App > StyledWrapper > Title > SubTitle > StyledModalWrapper
function App() {
  // State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    // StyledWrapper props isFlex then flexStyles: display, flexDirection, alignItems, justifyContent,
    // backgroundColor, width, height, margin, paddng
    <StyledWrapper
      isFlex
      flexDirection="column"
      backgroundColor="darkgrey"
      alignItems="center"
    >
      <Navbar />
      {modal ? (
        <Modal
          onClickClose={(e) => {
            e.preventDefault();
            handleEvent(modal, setModal);
          }}
          onClickSubmit={(e) => {
            e.preventDefault();
            handleSubmitUser(
              userData,
              firstName,
              lastName,
              username,
              password,
              setUserData,
              setFirstName,
              setLastName,
              setUsername,
              setPassword
            );
          }}
          onChangeUserName={(e) => {
            e.preventDefault();
            let target = e.target.value;
            handleEvent(username, setUsername, target);
          }}
          onChangePassword={(e) => {
            e.preventDefault();
            let target = e.target.value;
            handleEvent(password, setPassword, target);
          }}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      ) : null}
      {/* Title props: color, textDecoration, textAlign */}
      <Title color="#8f44fd" textAlign="center">
        Components Library
      </Title>
      {/* SubTitle props: color, textDecoration, textAlign */}
      <SubTitle color="#8f44fd" textAlign="center">
        Styled-Components
      </SubTitle>{" "}
      {/*  // Card props isFlex then flexStyles: display, flexDirection, alignItems, justifyContent, 
        margin, padding, background, border, width, minHeight, borderRadius, minWidth */}
      <Card
        isFlex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="2rem"
        margin="0 0 2rem"
        border="2px solid white"
        background="linear-gradient(to right, #d763cd, rgba(143,68,253))"
        borderRadius=".75rem"
      >
        <Title color="papayawhip" textDecoration="underline" textAlign="center">
          Styled Card
        </Title>

        {/* Avatar props isActive, hasBadge, name, src */}
        <Avatar hasBadge src={brighton} isActive="true" name="RY"></Avatar>
        <Avatar hasBadge isActive="true" name="RY"></Avatar>

        <SubTitle color="papayawhip">Styled Components Inputs</SubTitle>

        {/* Input props onChange, type, placeholder, value, color, width, background */}
        <Input
          onChange={(e) => {
            const target = e.target.value;
            handleEvent(firstName, setFirstName, target);
          }}
          placeholder="First name"
          value={firstName}
          color="palevioletred"
        />
        <Input
          onChange={(e) => {
            e.preventDefault();
            let target = e.target.value;
            handleEvent(lastName, setLastName, target);
          }}
          placeholder="Last name"
          value={lastName}
          color="palevioletred"
        />
        <StyledP>{userData.firstName}</StyledP>
        <StyledP>{userData.lastName}</StyledP>

        <SubTitle color="papayawhip">Styled Components Buttons</SubTitle>
        {/* Button props onClick, color, primary */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleSubmitUser(
              userData,
              firstName,
              lastName,
              username,
              password,
              setUserData,
              setFirstName,
              setLastName,
              setUsername,
              setPassword
            );
          }}
          color="#8f44fd"
          primary
        >
          Submit
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleCancel(userData.firstName, userData.lastName, setUserData)
          }}
          color="#8f44fd"
        >
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleEvent(modal, setModal);
          }}
          color="#8f44fd"
        >
          Modal
        </Button>
      </Card>
    </StyledWrapper>
  );
}

export default App;
