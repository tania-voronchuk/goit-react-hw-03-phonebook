import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const Filter = ({value, onChange}) => {
return(
    <div className={styles.formFilter}>
 <label>Find contact by name 
 <input className={styles.formInput}
 type="text"
 value={value}
onChange={onChange}/>
 </label>
 </div>
)
}

Filter.propTypes = {
 value: PropTypes.string.isRequired,
 onChange: PropTypes.func.isRequired
};

export default Filter;
