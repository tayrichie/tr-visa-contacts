import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import ContactItem from "../components/ContactItem";
import { updatedStoredList } from "../helpers";

const Contacts = styled.ul`
  margin: 0 auto ${(props) => props.theme.margin.full};
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

function Home() {
  const [contactsList, setContactsList] = useOutletContext();

  const handleDeleteContact = (contact) => {
    const confirmDelete = window.confirm(
      "Are you sure you'd like to delete this contact?"
    );

    if (confirmDelete) {
      const updatedList = contactsList.filter((item) => item !== contact);

      //update state
      setContactsList(updatedList);
      updatedStoredList(updatedList);
    }

    return;
  };

  return (
    <Contacts>
      {contactsList.length ? contactsList.map((contact, index) => (
        <ContactItem
          key={index}
          itemNumber={index}
          details={contact}
          deleteContact={handleDeleteContact}
        />
      )) : <h2>No contacts to display.</h2>}
    </Contacts>
  );
}

export default Home;
