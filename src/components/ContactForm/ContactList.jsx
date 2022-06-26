import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

function ContactList({ contacts, deleteContact }) {
    return (
        contacts.map(({id, name, number}) => {
            return <ul className={styles.formContactList} 
                 key={id}>
                <li className={styles.formContact}>{name} {number}</li>
                <button className={styles.formButton} 
                type="button" 
                onClick={() => deleteContact(id)}>Delete</button>
            </ul>
        })
    );
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    deleteContact: PropTypes.func.isRequired,
};


export default ContactList;
