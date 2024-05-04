import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact,  deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from "./ContactList.module.css";
import { HiOutlinePhoneIncoming, HiUserAdd } from "react-icons/hi";
import initialContacts from '../../contacts.json';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [contactsLoaded, setContactsLoaded] = useState(false);

  useEffect(() => {
    if (!contactsLoaded) {
      initialContacts.forEach(contact => {
        dispatch(addContact(contact));
      });
      setContactsLoaded(true);
    }
  }, [dispatch, contactsLoaded]);

  const searchTerm = useSelector(state => state.filters.name);
  const filteredContacts = contacts.filter(contact =>
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
          <button className={css.buttonDel} onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;