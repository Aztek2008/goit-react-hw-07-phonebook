import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducers";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;

//====================== SET LOCAL STORAGE =================================
// const saveState = (state) => {
//   try {
//     const enteringContacts = JSON.stringify(state.contacts.contacts);
//     const setLocalStorage = () => {
//       localStorage.setItem("contacts", enteringContacts);
//     };
//     setLocalStorage();
//   } catch (error) {
//     console.warn("Error:", error);
//   }
// };
// const loadState = () => {
//   try {
//     const persistedContacts = localStorage.getItem("contacts");
//     console.log("persistedContacts", persistedContacts);
//     return persistedContacts && JSON.parse(persistedContacts);
//   } catch (error) {
//     console.warn("Error:", error);
//   }
// };
// const persistedState = loadState();
//====================== SET LOCAL STORAGE ==============================

//====================== GET LOCAL STORAGE LISTENER ======================
// store.subscribe(() => {
//   saveState(store.getState());
// });
//====================== GET LOCAL STORAGE LISTENER=======================

//======================  SET LOCAL STORAGE W/O REDUX =====================
// componentDidMount() {
//   const persistedContacts = localStorage.getItem("contacts");
//   persistedContacts &&
//     this.setState({ contacts: JSON.parse(persistedContacts) });
// }
//=====
// componentDidUpdate(prevProps, prevState) {
//   prevState.contacts !== this.state.contacts && this.setLocalStorage();
// }
//=====
// setLocalStorage = () => {
//   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
// };
//======================  SET LOCAL STORAGE W/O REDUX =====================
