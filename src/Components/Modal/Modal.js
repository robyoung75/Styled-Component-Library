import React from "react";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/input";

import { StyledWrapper, Title, Header } from "../../Styles/Styles";

function Modal() {
  return (
    <StyledWrapper isFlex flexDirection="column">
      {" "}
      <Card
        isFlex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="0"
        margin="0"
        border="2px solid white"
        background="linear-gradient(to right, #d763cd, #8f44fd)"
        borderRadius="0 0 0.75rem 0.75rem "
        width="100%"
      >
        <Header isFlex backgroundColor="#8f44fd">
          {" "}
          <Title color="papayawhip">Modal</Title>
        </Header>{" "}
        <Input />
        <StyledWrapper isFlex>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </StyledWrapper>
      </Card>
    </StyledWrapper>
  );
}

export default Modal;
