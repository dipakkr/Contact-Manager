import React, { useReducer } from "react";
import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import uuid from "uuid";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Deepak",
        email: "deepak@gmaill.com",
        phone: "965454",
        type: "professional"
      },
      {
        id: 2,
        name: "Venkatesh",
        email: "venkat@gmaill.com",
        phone: "112211",
        type: "Personal"
      },
      {
        id: 3,
        name: "Kishu",
        email: "kishu@gmaill.com",
        phone: "779966",
        type: "professional"
      },
      {
        id: 4,
        name: "Deepika",
        email: "deepika@gmaill.com",
        phone: "336644",
        type: "Home"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
