import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from "./ContactList.module.css";
import { HiOutlinePhoneIncoming, HiUserAdd } from "react-icons/hi";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      {contacts.map((contact) => (
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
