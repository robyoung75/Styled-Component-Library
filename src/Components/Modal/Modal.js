import React from "react";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/input";

import {
  StyledWrapper,
  StyledP,
  Header,
 
} from "../../Styles/Styles";

function Modal({onClick}) {
  return (
    <StyledWrapper>
      <Header isFlex backgroundColor="#8f44fd">
        <StyledP color="papayawhip">Modal</StyledP>
      </Header>
      <Card
        isFlex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="0"
        margin="0"
        borderRadius="0 0 .75rem .75rem"
        background="linear-gradient(to right, #d763cd, #8f44fd)"
        
      >
        <Input />
        <StyledWrapper isFlex>
          <Button>Submit</Button>
          <Button onClick={onClick}>Cancel</Button>
        </StyledWrapper>
      </Card>
    </StyledWrapper>
  );
}

export default Modal;
