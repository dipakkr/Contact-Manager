import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { addContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    }
  });

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary"> Add Contact </h2>
      <input
        name="name"
        placeholder="name"
        type="text"
        value={name}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="email"
        type="text"
        value={email}
        onChange={onChange}
      />
      <input
        name="phone"
        placeholder="phone"
        type="text"
        value={phone}
        onChange={onChange}
      />
      <h5> Contact Type </h5>
      <input
        name="type"
        type="radio"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        name="type"
        type="radio"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional{" "}
      <div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Add Contact"
        />
      </div>
    </form>
  );
};

export default ContactForm;
