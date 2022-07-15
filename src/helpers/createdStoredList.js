const createdStoredList = (list) => {
  window.localStorage.setItem("contacts", JSON.stringify(list));
  return list;
};

export default createdStoredList;
