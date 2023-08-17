import { Component } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';
const localStorageKey = 'phone-contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem(localStorageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: nextContacts } = this.state;

    if (prevContacts !== nextContacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextContacts));
    }
  }
  handleSearch = event => {
    this.setState({ filter: event.target.value });
  };
  filterUsers = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  handleDelete = cardId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== cardId),
      };
    });
  };
  onSubmit = (name, number) => {
    const contact = { name, number, id: nanoid() };
    if (
      this.state.contacts.find(
        userCard => userCard.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`"${contact.name}  "is already in contact`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  render() {
    return (
      <Section>
        <h1>Phone book</h1>
        <PhoneForm onSubmit={this.onSubmit}></PhoneForm>
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} search={this.handleSearch}></Filter>
        <Contacts
          onDelete={this.handleDelete}
          filterUsers={this.filterUsers()}
          phoneBook={this.state.contacts}
        ></Contacts>
      </Section>
    );
  }
}
