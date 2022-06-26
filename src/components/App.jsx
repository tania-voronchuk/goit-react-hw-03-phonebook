import { Component } from "react";
import Form from "./ContactForm/Form";
import ContactList from "./ContactForm/ContactList";
import Filter from "./ContactForm/Filter";
import styles from "./ContactForm/ContactForm.module.css";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
   filter: ""
  }

  componentDidMount(){
    const savedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(savedContacts)
      this.setState({contacts: parsedContacts})
 } 
  
  componentDidUpdate(prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
 }

  addContact = (contact) => {  
   this.setState(prevState => ({  
    contacts: [contact, ...prevState.contacts],  
   })
   ); 
 };

  changeFilter = (event) => {
     this.setState({filter: event.currentTarget.value});
    }

    getVisibleContacts = () => {
      const { contacts, filter } = this.state;
      const normalizedFilter = filter.toLowerCase();
  
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => 
        contact.id !== contactId),
    }));
  };

render() {
const {filter} = this.state; 
const visibleContact = this.getVisibleContacts();
  return <div> 
    <h1 className={styles.formTitle}>Phonebook</h1>
     <Form onSubmit={this.addContact}/> 
     <h2 className={styles.formTitle}>Contacts</h2>
    <Filter value={filter} onChange={this.changeFilter}/>
     <ContactList contacts={visibleContact} deleteContact={this.deleteContact}/>
    </div>
     }
    }
