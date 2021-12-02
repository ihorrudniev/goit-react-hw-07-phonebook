/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";
// import shortid from "shortid";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccess = createAction("contacts/addContactsSuccess");
export const addContactsError = createAction("contacts/addContactsError");

export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");

export const changeFilter = createAction("contacts/changeFilter");

// const changeFilter = createAction("contacts/filterContact");

// export default {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,
//   deleteContactsRequest,
//   deleteContactsSuccess,
//   deleteContactsError,
//   // addContact,
//   // deleteContact,
//   changeFilter,
// };
