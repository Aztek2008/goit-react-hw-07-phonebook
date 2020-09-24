import axios from "axios";
import contactsActions from "../contacts/contactsActions";

axios.defaults.baseURL = "http://localhost:1000";

const addContact = (contact) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then((response) => {
      dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then((response) =>
      dispatch(contactsActions.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
