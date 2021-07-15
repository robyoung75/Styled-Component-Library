import React from "react";
import {
  handleCancel,
  handleEvent,
  handleSubmitUser,
} from "../Assets/eventHandlers/eventHandlers";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/input";

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
    <StyledWrapper className="login">
      <StyledWrapper
        className="login__header"
        isFlex
        alignItems="center"
        background="#31394d"
        height="2.5rem"
        borderRadius=".25rem .25rem 0 0 "
        padding="1rem"
      >
        <StyledP color="rgba(255,255,255,.89)">Modal</StyledP>
      </StyledWrapper>

      <StyledWrapper
        className="login__containerBody"
        isFlex
        flexDirection="column"
        alignItems="center"
        margin="0px"
        padding="1rem"
        backgroundColor="brown"
        borderRadius="0 0 .25rem .25rem"
        background="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(49,57,77,1) 50%, rgba(0,0,0,1) 100%)"
      >
        <StyledWrapper
          isFlex
          flexDirection="column"
          alignItems="center"
          className="login__containerInputs"
        >
          <Input
            placeholder="UserName"
            value={userName}
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
            onChange={(e) => {
              e.preventDefault();
              const target = e.target.value;
              handleEvent(password, setPassword, target);
            }}
          ></Input>
        </StyledWrapper>
        <StyledWrapper
          isFlex
          justifyContent="space-evenly"
          className="login__containerButtons"
        >
          {" "}
          <Button
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
            onClick={(e) => {
              e.preventDefault();
              handleCancel(userData, setUserData);
              handleEvent(modalActive, setModalActive);
            }}
          >
            Cancel
          </Button>
        </StyledWrapper>
      </StyledWrapper>
    </StyledWrapper>
  );
}

export default Login;
