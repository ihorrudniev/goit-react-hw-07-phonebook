/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contacts/addContact", ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction("contacts/delContact");

const changeFilter = createAction("contacts/filterContact");

export default { addContact, deleteContact, changeFilter };
