import React, { useState, useEffect } from "react";

const ContactForm = ({ addContact, editContact, updateContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setEmail(editContact.email);
      setPhone(editContact.phone);
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const contact = { name, email, phone };

    if (editContact) {
      updateContact({ ...contact, id: editContact.id });
    } else {
      addContact(contact);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">{editContact ? "Update" : "Add Contact"}</button>
    </form>
  );
};

export default ContactForm;