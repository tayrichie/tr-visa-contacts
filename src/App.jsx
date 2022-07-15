import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Wrapper,
  TitleContainer,
  PageTitle,
  Navigation,
  ButtonLink,
} from "./styles/SharedStyles.jsx";
import contacts from "./data/contacts";
import { createdStoredList, getStoredList } from "./helpers";

function App(props) {
  const defaultContactsList = contacts;
  const [contactsList, setContactsList] = useState([]);

  const findContacts = () => {
    const listIsStored =
      window.localStorage.getItem("contacts") === null ? false : true;
    return !listIsStored ? createdStoredList(defaultContactsList) : getStoredList();
  };

  window.onload = () => {
    const contacts = findContacts();
    setContactsList(contacts);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <PageTitle>Contacts</PageTitle>

        <Navigation>
          <ButtonLink to="/" activeClassName="active">
            Home
          </ButtonLink>
          <ButtonLink to="add-new" activeClassName="active">
            Add New Contact
          </ButtonLink>
        </Navigation>
      </TitleContainer>

      <Outlet context={[contactsList, setContactsList]} />
    </Wrapper>
  );
}

export default App;
