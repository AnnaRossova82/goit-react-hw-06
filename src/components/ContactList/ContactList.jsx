
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from "./ContactList.module.css";
import { HiOutlinePhoneIncoming, HiUserAdd } from "react-icons/hi";

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const searchTerm = useSelector(state => state.filters.name); 
  const dispatch = useDispatch();

  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  const handleDelete = (contact) => {
    dispatch(deleteContact(contact.id)); 
  };

  return (
    <div className={css.container}>
      {filteredContacts.map((contact) => (
        <div className={css.card} key={contact.id}>
          <span>
            <p><HiUserAdd /> Name: {contact.name}</p>
            <p><HiOutlinePhoneIncoming /> Number: {contact.number}</p>
          </span>
          <button className={css.buttonDel} onClick={() => handleDelete(contact)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;