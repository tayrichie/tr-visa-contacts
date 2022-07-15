import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../styles/SharedStyles";
import { deleteIcon, editIcon, moreIcon } from "./js-svg";

const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
`;

const IconButton = styled(Button)`
  background: transparent;
  color: transparent;
  font-size: ${(props) => props.theme.fontSizes.text};
  border: none;
  padding: 0;
  width: ${(props) => props.theme.icons.regular};
  height: ${(props) => props.theme.icons.regular};

  & + & {
    margin-top: ${(props) => props.theme.margin.half};
  }

  & svg {
    fill: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    transform: scale(1.3);

    & svg {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }

  &:hover,
  &:focus {
    background: transparent;
  }
`;

function ContactActions(props) {
  const { id, contact, moreInfo, deleteContact } = props;

  const name = `${contact.first_name} ${contact.last_name}`;

  return (
    <ActionBar>
      <IconButton
        onClick={moreInfo}
        aria-label={`View More Information for ${name}`}
      >
        {moreIcon}
      </IconButton>

      <IconButton
        as={Link}
        to={`/edit-${id}`}
        name="edit"
        aria-label={`Edit Information for ${name}`}
      >
        {editIcon}
      </IconButton>

      <IconButton type="button" name="delete" aria-label="Delete Contact" onClick={() => deleteContact(contact)}>
        {deleteIcon}
      </IconButton> 
    </ActionBar>
  );
}

export default ContactActions;
