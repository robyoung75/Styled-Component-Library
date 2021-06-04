// styled components
import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/input";

// handler functions
// import { handleEvent } from "../../Assets/eventHandlers/eventHandlers";

import { StyledWrapper, StyledP, Header } from "../../Styles/Styles";

function Modal({
  onClickClose,
  onClickSubmit,
  username,
  onChangeUserName,
  password,
  onChangePassword,
}) {
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
        {/* Input props: onChange function, type, placeholder, value, color, width, background */}
        <Input
          onChange={onChangeUserName}
          value={username}
          placeholder="Username"
        />

        <Input
          onChange={onChangePassword}
          value={password}
          type="password"
          placeholder="Password"
        />

        <StyledWrapper isFlex>
          <Button onClick={onClickSubmit} primary color="#8f44fd">
            Submit
          </Button>
          <Button onClick={onClickClose} color="#8f44fd">
            Cancel
          </Button>
        </StyledWrapper>
      </Card>
    </StyledWrapper>
  );
}

export default Modal;
