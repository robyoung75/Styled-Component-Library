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

  return (
    <StyledWrapper padding="50px">
      <MyCard
        userData={userData}
        isActive={isActive}
        setActive={setActive}
        hasBadge={hasBadge}
        setHasBadge={setHasBadge}
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
        padding="2rem 0"
      ></MyCard>
    </StyledWrapper>
  );
}

export default App;
