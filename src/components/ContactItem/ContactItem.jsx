import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

// import PropTypes from "prop-types";

import s from "./ContactItem.module.css";

const ContactItem = ({ contact = {}, onRemoveContact }) => {
  return (
    <li className={s.ContactItem}>
      {contact.name}: {contact.number}
      <button
        type="submit"
        id={contact.id}
        className={s.Button}
        onClick={onRemoveContact}
      >
        <span>✘</span>
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return {
    contact,
  };
};

const mapDispatchToProps = (dispach, ownProps) => ({
  onRemoveContact: () => dispach(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

// ContactItem.propTypes = {
//   contact: PropTypes.object,
//   onRemoveContact: PropTypes.object,
// };
