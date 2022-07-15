import { deleteStoredList } from "../helpers";

const  updatedStoredList = (list) => {
  console.log(list[0]);

  // explicitly clear local storage
  deleteStoredList();
  // explicitly update local storage
  return window.localStorage.setItem("contacts", JSON.stringify(list));
};

export default updatedStoredList;