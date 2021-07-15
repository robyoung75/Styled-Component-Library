import React from "react";
import {
  handleCancel,
  handleEvent,
  handleSubmitUser,
} from "../Assets/eventHandlers/eventHandlers";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/input";
import Modal from "../Components/Modal/Modal";
import { Header } from "../Styles/HeaderStyles";

import { StyledP, StyledWrapper } from "../Styles/Styles";

function Login({
  handleEvent,
  
  modalActive,
  setModalActive,
  userData,
  setUserData,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  password,
  setPassword,
  userName,
  setUserName,
}) {
  return (
    <StyledWrapper>
      <Header
        isFlex
        alignItems="center"
        background="rgba(0,0,0,.6)"
        height="50px"
        borderRadius=".25rem .25rem 0 0 "
        padding="1rem"
      >
        <StyledP color="rgba(255,255,255,.89)">Modal</StyledP>
      </Header>

      <Modal
        isFlex
        flexDirection="column"
        alignItems="center"
        margin="0px"
        padding="1rem"
        backgroundColor="brown"
        borderRadius="0 0 .25rem .25rem"
        background="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(49,57,77,1) 50%, rgba(0,0,0,1) 100%)"
      >
        <StyledWrapper isFlex flexDirection="column" alignItems="center">
          <Input
            placeholder="UserName"
            value={userName}
            placeholderColor="rgba(0,0,0,.6)"
            labelColor="rgba(255,255,255,.6)"
            color="rgba(0,0,0,.6)"
            onChange={(e) => {
              e.preventDefault();
              const target = e.target.value;
              handleEvent(userName, setUserName, target);
            }}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            labelColor="rgba(255,255,255,.6)"
            color="rgba(0,0,0,.6)"
            onChange={(e) => {
              e.preventDefault();
              const target = e.target.value;
              handleEvent(password, setPassword, target);
            }}
          ></Input>
        </StyledWrapper>
        <StyledWrapper isFlex justifyContent="center">
          {" "}
          <Button
            background="linear-gradient(to bottom right, #8162ce, #f54ba5)"
            fontSize="1rem"
            height="40px"
            width="auto"
            padding="0.25rem, 1rem"
            border="none"
            borderRadius="40px"
            boxShadow="0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16)"
            color="rgba(255,255,255,.89)"
            onClick={(e) => {
              e.preventDefault();
              handleSubmitUser(
                userData,
                firstName,
                lastName,
                userName,
                password,
                setUserData,
                setFirstName,
                setLastName,
                setUserName,
                setPassword
              );
              handleEvent(modalActive, setModalActive);
            }}
          >
            Submit
          </Button>
          <Button
            background="linear-gradient(to bottom right, #8162ce, #f54ba5)"
            fontSize="1rem"
            height="40px"
            width="auto"
            padding="0.25rem, 1rem"
            border="none"
            borderRadius="40px"
            boxShadow="0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16)"
            color="rgba(255,255,255,.89)"
            onClick={(e) => {
              e.preventDefault();
              handleCancel(userData, setUserData);
              handleEvent(modalActive, setModalActive);
     
            }}
          >
            Cancel
          </Button>
        </StyledWrapper>
      </Modal>
    </StyledWrapper>
  );
}

export default Login;
