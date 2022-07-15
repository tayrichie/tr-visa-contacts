import { useOutletContext, useNavigate } from "react-router-dom";
import InfoForm from "../components/InfoForm";
import { updatedStoredList } from "../helpers";

function AddNew() {
  const [contactsList, setContactsList] = useOutletContext();
  const navigate = useNavigate();

  const handleAddContact = (e, contact) => {
    e.preventDefault();

    const updatedList = contactsList.concat(contactsList.unshift(contact));
    setContactsList(updatedList);
    updatedStoredList(updatedList);

    // go back to home page
    navigate(`/`, { replace: false });
  };

  return (
    <InfoForm
      submit={handleAddContact}
      title="Provide New Contact Information"
    />
  );
}

export default AddNew;
