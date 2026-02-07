import React from "react";
import ContactItem from "./ContactItem.jsx";

const ContactList = ({ contacts, setEditContact, deleteContact }) => {
  if (contacts.length === 0) return <p>No contacts available.</p>;

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          setEditContact={setEditContact}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;