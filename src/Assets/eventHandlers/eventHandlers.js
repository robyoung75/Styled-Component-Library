// Event handlers

// User Inputs
// set firstname value
const handleFirstName = (user, setUser, target) => {
  setUser({ ...user, firstName: target });
};
// set lastname value
const handleLastName = (user, setUser, target) => {
  setUser({ ...user, lastName: target });
};

//Button Event Handlers
// Onclick for User Buttons
const handleUser = (user, setData, setUser) => {
  setData(user);
  setUser({ firstName: "", lastName: "" });
};

// OnClick for user Buttons
const handleCancel = (setUser) => {
  setUser({ firstName: "", lastName: "" });
};

// Modal event handlers
// OnClick open Modal
const handleOpenModal = (setModal) => {
  setModal(true);
};

// OnClick close Modal
const handleCloseModal = (setModal) => {
  setModal(false);
};

export {
  handleFirstName,
  handleLastName,
  handleUser,
  handleCancel,
  handleOpenModal,
  handleCloseModal,
};
