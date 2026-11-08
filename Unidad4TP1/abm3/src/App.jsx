import React, { useState, useEffect } from "react";
import styles from "./styles/app.module.css";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [editContact, setEditContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (contact) => {
    if (editContact) {
      setContacts(
        contacts.map((c) => (c.email === editContact.email ? contact : c)),
      );
      setEditContact(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  const editContactHandler = (contact) => {
    setEditContact(contact);
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm) ||
      contact.phone.includes(searchTerm)
    );
  });

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.heading}>Agenda de contactos</h1>
      <input
        type="text"
        placeholder="Buscar Contacto"
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.mainContent}>
        <ContactForm addContact={addContact} editContact={editContact} />
        <ContactTable
          contacts={filteredContacts}
          deleteContact={deleteContact}
          editContact={editContactHandler}
        />
      </div>
    </div>
  );
}

export default App;
