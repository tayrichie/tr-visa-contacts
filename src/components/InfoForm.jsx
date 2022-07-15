import { useState } from "react";
import { SaveButton, Form, FormItem } from "../styles/SharedStyles";

function InfoForm(props) {
  // establish default contact
  const blankContact = {
    first_name: null,
    last_name: null,
    phone_number: null,
    email: null,
  };

  // set state to use default contact
  const [contact, setContact] = useState(blankContact);

  const { submit } = props;

  // update fields for selected contact when changed
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };

  return (
    <Form>
      <fieldset>
        <legend>{props.title}</legend>

        <FormItem>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            onChange={handleChange}
          />
        </FormItem>

        <FormItem>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            onChange={handleChange}
          />
        </FormItem>

        <FormItem>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="telephone"
            id="phone_number"
            name="phone_number"
            onChange={handleChange}
            placeholder="123-456-7890"
          />
        </FormItem>

        <FormItem>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="example@domain.com"
          />
        </FormItem>

        <SaveButton type="submit" onClick={(e) => submit(e, contact)}>
          Save
        </SaveButton>
      </fieldset>
    </Form>
  );
}

export default InfoForm;
