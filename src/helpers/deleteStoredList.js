const deleteStoredList = () => {
  // explicitly clear local storage
  return window.localStorage.removeItem("contacts");
};

export default deleteStoredList;
