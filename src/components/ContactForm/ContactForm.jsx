import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

// import PropTypes from "prop-types";

import Notification from "../Notification";
import contactsOperations from "../../redux/contacts/contactsOperations";

import s from "./ContactForm.module.css";
import AppearStyles from "./AppearStyles.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    existedContact: false,
    errorMessage: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const existedContacts = this.props.contacts.map((cont) =>
      cont.name.toLowerCase()
    );
    // ====================================
    // SHOW ERR MSG IF SAVING SAME CONTACT
    // ====================================
    if (existedContacts.includes(name.toLowerCase())) {
      this.showNotification(`${name} is already on the list!`);
    } else if (!name || !number) {
      // ====================================
      // SHOW ERR MSG IF SAVING EMPTY CONTACT
      // ====================================
      this.showNotification("You are trying to add an empty field!");
    } else {
      this.props.onAddContact({
        name: name,
        number: number,
      });
    }

    this.setState({
      name: "",
      number: "",
    });
  };

  showNotification = () => {
    this.setState({ existedContact: true });
    setTimeout(() => this.setState({ existedContact: false }), 5000);
  };

  render() {
    const { name, number, existedContact } = this.state;

    return (
      <>
        <CSSTransition
          in={existedContact}
          classNames={AppearStyles}
          unmountOnExit
          timeout={1000}
        >
          <Notification />
        </CSSTransition>
        <form className={s.ContactForm} onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              onChange={this.handleChange}
              placeholder="Name..."
              value={name}
              type="text"
              name="name"
              autoFocus
            />
          </label>

          <label>
            <p>Number</p>
            <NumberFormat
              format="(###) ###-####"
              onChange={this.handleChange}
              placeholder="Phone Number..."
              value={number}
              name="number"
              mask=""
            />
          </label>

          <button className={s.Button} type="submit">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   existedContact: PropTypes.bool,
// };

// THROW ERROR MESSAGE AND DESCRIBES WRONG INFO
