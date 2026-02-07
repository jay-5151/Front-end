import React from "react";

const ContactItem = ({ contact, setEditContact, deleteContact }) => {
  return (
    <div className="contact-item">
      <div>
        <h3>{contact.name}</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </div>
      <div>
        <button onClick={() => setEditContact(contact)}>Edit</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactItem;