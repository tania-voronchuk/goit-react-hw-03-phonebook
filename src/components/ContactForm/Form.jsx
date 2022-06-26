import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class Form extends Component {
state = {
 name: "",
 number: ""
 }

 handleChange = event => {
 const {name, value} = event.currentTarget;
 this.setState({[name]: value});
 };
 
 handleSubmit = event => {
 event.preventDefault();
 const contact = {
 id: nanoid(),
 ...this.state,
 }
 if(contact.name === this.state.name) {
    return alert(`${this.state.name} is already in contacts`);
  }else{
    this.props.onSubmit(contact);
    console.log(this.state);
    this.reset();
  }    
 };

reset = () => {
 this.setState({
 name: "",
 number: ""});
};

 render() {
  return(
 <form className={styles.form} 
   onSubmit={this.handleSubmit}>
 <label>
 Name
 <input className={styles.formInput}
 type="text"
 name="name"
 value={this.state.name} 
 onChange={this.handleChange}
 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
 required
/>
 </label>
<label>
Number
 <input className={styles.formInput}
 type="tel"
 name="number"
 value={this.state.number}
 onChange={this.handleChange}
 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
 required
/>
 </label>
<button className={styles.formButton} type="submit">Add contact</button>
 </form>
 )
 }
}

Form.propTypes = {
 onSubmit: PropTypes.func.isRequired
};

export default Form;
