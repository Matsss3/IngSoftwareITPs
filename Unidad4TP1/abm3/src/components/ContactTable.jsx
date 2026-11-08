import React from "react";
import styles from "../styles/contactTable.module.css";

const ContactTable = ({ contacts, deleteContact, editContact }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.contactTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  className={styles.editButton}
                  onClick={() => editContact(contact)}
                >
                  Editar
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteContact(contact.email)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
