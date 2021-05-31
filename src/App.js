import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Input from "./Components/Input/input";
import Avatar from "./Components/Avatar/Avatar";

import brighton from "./Assets/Images/brighton.jpg";

import "./App.css";

import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
  text-align: center;
`;

const SubTitle = styled.h3`
  color: ${(props) => props.color};
`;

function App() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [data, setData] = useState(null);

  const handleFirstName = (e) => {
    e.preventDefault();
    setUser({ ...user, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setUser({ ...user, lastName: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    setData(user);
    setUser({ firstName: "", lastName: "" });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setUser({ firstName: "", lastName: "" });
  };

  return (
    <Wrapper>
      <Title color="#8f44fd">Components Library</Title>
      <SubTitle color="#8f44fd">Styled-Components</SubTitle>{" "}
      <Card
        isFlex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="2rem"
        margin="0 0 2rem"
        border="2px solid white"
        background="linear-gradient(to right, #d763cd, #8f44fd)"
      >
        <Title color="papayawhip" textDecoration="underline">
          Styled Card
        </Title>
        <Avatar hasBadge src={brighton} isActive="true" name="RY"></Avatar>

        <SubTitle color="papayawhip">Styled Components Inputs</SubTitle>

        <Input
          onChange={handleFirstName}
          placeholder="First name"
          value={user.firstName}
          color="palevioletred"
        />
        <Input
          onChange={handleLastName}
          placeholder="Last name"
          value={user.lastName}
          color="palevioletred"
        />

        <SubTitle color="papayawhip">Styled Components Buttons</SubTitle>
        <Button onClick={handleUser} color="#8f44fd" primary>
          Submit
        </Button>
        <Button onClick={handleCancel} color="#8f44fd">
          Cancel
        </Button>
      </Card>
    </Wrapper>
  );
}

export default App;
