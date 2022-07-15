const getStoredList = () => {
  return JSON.parse(window.localStorage.getItem("contacts"));
};

export default getStoredList;
