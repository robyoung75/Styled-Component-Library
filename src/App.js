// React
import { useState } from "react";

// Components imports
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Input from "./Components/Input/input";
import Avatar from "./Components/Avatar/Avatar";
import Modal from "./Components/Modal/Modal";

//Styled Components Imports
import {
  StyledWrapper,
  Title,
  SubTitle,
  StyledModalWrapper,
} from "./Styles/Styles";

// Event Handlers
import {
  handleFirstName,
  handleLastName,
  handleUser,
  handleCancel,
  handleOpenModal,
  handleCloseModal,
} from "./Assets/eventHandlers/eventHandlers";

// images
import brighton from "./Assets/Images/brighton.jpg";

// App > StyledWrapper > Title > SubTitle > StyledModalWrapper
function App() {
  // State
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);

  return (
    // StyledWrapper props isFlex then flexStyles: display, flexDirection, alignItems, justifyContent,
    // backgroundColor, width, height, margin, paddng
    <StyledWrapper
      isFlex
      flexDirection="column"
      backgroundColor="darkgrey"
      alignItems="center"
      justifyContent="center"
    >
      {modal ? (
        <StyledModalWrapper>
          <Modal
            onClick={(e) => {
              e.preventDefault();
              handleCloseModal(setModal);
            }}
          />
        </StyledModalWrapper>
      ) : null}

      <StyledWrapper
        isFlex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
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
          <Title
            color="papayawhip"
            textDecoration="underline"
            textAlign="center"
          >
            Styled Card
          </Title>

          {/* Avatar props isActive, hasBadge, name, src */}
          <Avatar hasBadge src={brighton} isActive="true" name="RY"></Avatar>

          <SubTitle color="papayawhip">Styled Components Inputs</SubTitle>

          {/* Input props onChange, type, placeholder, value, color, width, background */}
          <Input
            onChange={(e) => {
              e.preventDefault();
              let target = e.target.value;
              handleFirstName(user, setUser, target);
            }}
            placeholder="First name"
            value={user.firstName}
            color="palevioletred"
          />
          <Input
            onChange={(e) => {
              e.preventDefault();
              let target = e.target.value;
              handleLastName(user, setUser, target);
            }}
            placeholder="Last name"
            value={user.lastName}
            color="palevioletred"
          />

          <SubTitle color="papayawhip">Styled Components Buttons</SubTitle>
          {/* Button props onClick, color, primary */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleUser(user, setData, setUser);
            }}
            color="#8f44fd"
            primary
          >
            Submit
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleCancel(setUser);
            }}
            color="#8f44fd"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleOpenModal(setModal);
            }}
            color="#8f44fd"
          >
            Modal
          </Button>
        </Card>
      </StyledWrapper>
    </StyledWrapper>
  );
}

export default App;
