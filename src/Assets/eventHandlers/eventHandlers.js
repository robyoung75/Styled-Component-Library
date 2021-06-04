// Event handlers

const handleSubmitUser = (
  stateUser,
  stateFirstName,
  stateLastName,
  stateUserName,
  statePassword,
  setStateUser,
  setStateFirstName,
  setStateLastName,
  setStateUserName,
  setStatePassword
) => {
  setStateUser({
    ...stateUser,
    firstName: stateFirstName !== "" ? stateFirstName : stateUser.firstName,
    lastName: stateLastName !== "" ? stateLastName : stateUser.lastName,
    userName: stateUserName !== "" ? stateUserName : stateUser.userName,
    password: statePassword !== "" ? statePassword : stateUser.password,
  });
  setStateFirstName("");
  setStateLastName("");
  setStateUserName("");
  setStatePassword("");
};

const handleEvent = (state, setState, target) => {
  state === true
    ? setState(false)
    : state === false
    ? setState(true)
    : target
    ? setState(target)
    : setState("");
};

export { handleSubmitUser, handleEvent };
