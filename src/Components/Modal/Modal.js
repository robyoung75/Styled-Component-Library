import React from "react";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/input";

import { StyledWrapper, StyledP, Header } from "../../Styles/Styles";

function Modal({ onClick }) {
  return (
    <StyledWrapper isFlex flexDirection="column" alignItems="center">
      <Header isFlex alignItems="center" backgroundColor="#8f44fd" width="80%">
        <StyledP padding=".5rem" color="papayawhip">
          Modal
        </StyledP>
      </Header>
      <Card
        isFlex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="0"
        margin="0"
        borderRadius="0 0 .75rem .75rem"
        background="linear-gradient(to right, #d763cd, rgba(255, 255, 255, .7))"
        width="80%"
      >
        <Input />
        <Input />

        <StyledWrapper isFlex>
          <Button primary color="#8f44fd">
            Submit
          </Button>
          <Button onClick={onClick} color="#8f44fd">
            Cancel
          </Button>
        </StyledWrapper>
      </Card>
    </StyledWrapper>
  );
}

export default Modal;
