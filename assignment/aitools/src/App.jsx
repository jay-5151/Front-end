import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";


const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Contact Manager</h1>
      <ContactForm
        addContact={addContact}
        editContact={editContact}
        updateContact={updateContact}
      />
      <ContactList
        contacts={contacts}
        setEditContact={setEditContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;