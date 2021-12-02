/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from "./actions";

axios.defaults.baseURL =
  "https://619aab5727827600174452e9.mockapi.io/contacts/";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

const addContact = (name, number) => (dispatch) => {
  const contacts = { name, number, completed: false };

  dispatch(addContactsRequest());
  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch((error) => dispatch(deleteContactsError(error)));
};

export default { fetchContacts, addContact, deleteContact };
