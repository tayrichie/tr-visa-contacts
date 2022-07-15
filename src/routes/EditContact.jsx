import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import InfoForm from "../components/InfoForm";
import { updatedStoredList } from "../helpers";

const EditContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  & > div {
    flex: 0 1 calc(50% - 3em);
    padding: ${(props) => props.theme.padding.half};
  }
`;

const ContainerLabel = styled.p`
  display: block;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.tiny};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: ${(props) => props.theme.padding.half};
  border-bottom: 1px solid ${(props) => props.theme.border.color};
`;

function EditContact() {
  const [contactsList, setContactsList] = useOutletContext();

  let params = useParams();
  const selectedContact = contactsList[params.id - 1];
  const { first_name, last_name, phone_number, email } = selectedContact;

  const navigate = useNavigate();

  const updateContactInfo = (currentContact, contact) => {
    const newContact = {};

    // remove any fields that were not updated
    Object.entries(contact).filter((info) => {
      const infoName = info[0];
      const infoValue = info[1];

      if (infoValue !== null) {
        newContact[infoName] = infoValue;
      }

      return;
    });

    // combine fields that were updated with fields that were not updated
    return { ...currentContact, ...newContact };
  };

  const handleUpdateContact = (e, contact) => {
    e.preventDefault();

    const currentContactIndex = contactsList.indexOf(selectedContact);
    const currentContact = contactsList[currentContactIndex];

    const updatedContact = updateContactInfo(currentContact, contact);

    // create a shallow copy of the contacts list
    const updatedList = [...contactsList];
    // update only the selected contact within that list
    updatedList[currentContactIndex] = updatedContact;

    // update state
    setContactsList(updatedList);
    updatedStoredList(updatedList);

    // go back to homepage
    navigate(`/`, { replace: false });
  };

  return (
    <EditContainer>
      <div>
        <ContainerLabel>Current Information</ContainerLabel>
        <h2>
          {first_name} {last_name}
        </h2>
        <p>
          <strong>Phone:</strong> {phone_number}
        </p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>

      <div>
        <InfoForm
          submit={handleUpdateContact}
          title="Update Contact Information"
        />
      </div>
    </EditContainer>
  );
}

export default EditContact;
