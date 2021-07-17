// React
import { useState } from "react";

// universal styles
import "../Components/App.css";

// Components imports
import Navbar from "./Library/Navbar/Navbar";
import ProfileCard from "./ProfileCard";
import Login from "./Login";
import BgCard from './BgCard'


//Styled Components Imports
import {
  StyledWrapper,
  Title,
  SubTitle,
  StyledP,
} from "./Library/ComponentStyles/ComponentStyles";

// images
import brighton from "../Assets/Images/brighton.jpg";
import zen from '../Assets/Images/Zen.jpg';

// eventHandler fucntions
import {
  handleEvent,
  handleCancel,
  handleSubmitUser,
} from "../Assets/eventHandlers/eventHandlers";

// App
function App() {
  // State
  const [firstName, setFirstName] = useState("@learn");
  const [lastName, setLastName] = useState("Mern");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    password: password,
    userImage: brighton,
  });

  const [modalActive, setModalActive] = useState(false);
  const [isActive, setActive] = useState(true);
  const [avatarActive, setAvatarActive] = useState(false);
  const [hasBadge, setHasBadge] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [hasImg, setHasImg] = useState(false);

  const [bgCardImg, setbgCardImg] = useState(zen)

  return (
    <StyledWrapper>
      <Navbar
        isActive={isActive}
        setActive={setActive}
        modalActive={modalActive}
        setModalActive={setModalActive}
        isFlex
      ></Navbar>

      <StyledWrapper
        isFlex
        flexDirection="column"
        height="auto"
        background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(49,57,77,1) 50%, rgba(131,58,180,1) 100%)"
        borderBottom="2px solid #fff"
        padding="75px 10px 0 10px"
        alignItems="center"
        opacity={modalActive ? 0.5 : null}
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

        <StyledWrapper isFlex justifyContent="center">



          <BgCard src={zen}></BgCard>



          <ProfileCard
            userData={userData}
            isActive={isActive}
            setActive={setActive}
            avatarActive={avatarActive}
            setAvatarActive={setAvatarActive}
            hasBadge={hasBadge}
            setHasBadge={setHasBadge}
            skillsActive={skillsActive}
            setSkillsActive={setSkillsActive}
            hasImg={hasImg}
            setHasImg={setHasImg}
            src={userData.userImage}
          ></ProfileCard>
         
        </StyledWrapper>
      </StyledWrapper>

      <StyledWrapper
        height="1000px"
        background="linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(49,57,77,1) 50%, rgba(0,0,0,1) 100%)"
        opacity={modalActive ? 0.4 : null}
      >
        {" "}
        <StyledP color="rgba(255,255,255,.6)">{userData.userName}</StyledP>
        <StyledP color="rgba(255,255,255,.6)">{userData.password}</StyledP>
      </StyledWrapper>

      <StyledWrapper
        position="fixed"
        left="50%"
        top="50%"
        zIndex="8"
        transform="translate(-50%, -50%)"
        width="auto"
      >
        {modalActive ? (
          <Login
            modalActive={modalActive}
            setModalActive={setModalActive}
            handleEvent={handleEvent}
            handleCancel={handleCancel}
            handleSubmitUser={handleSubmitUser}
            userData={userData}
            setUserData={setUserData}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            password={password}
            setPassword={setPassword}
            userName={userName}
            setUserName={setUserName}
          ></Login>
        ) : null}
      </StyledWrapper>
    </StyledWrapper>
  );
}

export default App;
