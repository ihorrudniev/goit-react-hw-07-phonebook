import React, { Component } from "react";
// import { connect } from 'react-redux';
import ContactsForm from "./components/ContactForm";
// import ContactsList from "./components/ContactList/ContactList.js";
import ContactsListItem from "./components/ContactList/ContactListItem.js";
import Container from "./components/Container";
import Filter from "./components/Filter/Filter";

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // addContact = contact => {
  //   if (!this.hasContacts(contact.name)) {
  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //     }));
  //   } else {
  //     alert(`${contact.name} is already in contacts`);
  //   }
  // };

  // hasContacts = name => {
  //   return this.state.contacts.find(contact => {
  //     return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase();
  //   });
  // };

  // findContact = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLocaleLowerCase();

  //   if (filter.length) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter),
  //     );
  //   } else {
  //     return contacts;
  //   }
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactsForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          {/* <ContactsList> */}
          <ContactsListItem />
          {/* </ContactsList> */}
        </div>
      </Container>
    );
  }
}

export default App;
