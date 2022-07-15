import { useState } from "react";
import styled from "styled-components";
import ContactActions from "./ContactActions";

const Contact = styled.li`
  margin: ${(props) => props.theme.margin.full} 0;
  padding: ${(props) => props.theme.padding.full};
  background: ${(props) => props.theme.colors.offwhite};
  color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.border.color};
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: 0 ${(props) => props.theme.padding.quarter}
    ${(props) => props.theme.padding.half}
    ${(props) => props.theme.colors.shadow};
  flex: 0 1 100%;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    flex: 0 1 calc(50% - 3em);
  }

  @media screen and (min-width: 1024px) {
    flex: 0 1 calc(33% - 3em);
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ItemNumber = styled.p`
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.text};
  font-weight: bold;
  margin: 0;
`;

const Name = styled.p`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  margin-top: ${(props) => props.theme.margin.half};
  margin-bottom: ${(props) => props.theme.margin.quarter};
`;

const Phone = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.sm_md};
`;

const Email = styled.p`
  margin: 0;
  height: 0;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  visibility: hidden;
  overflow: hidden;
  transition: height 0.4s linear;

  &.expanded {
    visibility: visible;
    margin-top: ${(props) => props.theme.margin.half};
    height: auto;
  }

  & > a {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: underline;
    }
  }
`;

function ContactItem(props) {
  const [showAll, setShowAll] = useState(false);

  const { details, itemNumber, deleteContact } = props;
  const { first_name, last_name, phone_number, email } = details;

  const fullName = `${first_name} ${last_name}`;

  const showFullInfo = () => {
    setShowAll(!showAll);
  };

  const id = (itemNumber + 1).toString();

  return (
    <Contact>
      <ContactInfo>
        <ItemNumber>{id}</ItemNumber>

        <Name>{fullName}</Name>

        <Phone>{phone_number}</Phone>

        <Email className={showAll ? "expanded" : null}>
          {email ? (
            <a href={`mailto:${email}`}>{email}</a>
          ) : (
            <i>No email provided.</i>
          )}
        </Email>
      </ContactInfo>

      <ContactActions
        id={id}
        contact={details}
        moreInfo={showFullInfo}
        deleteContact={deleteContact}
      />
    </Contact>
  );
}

export default ContactItem;
