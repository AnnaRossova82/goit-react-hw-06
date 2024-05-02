import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts, selectContacts } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import initialContacts from '../contacts.json';

function App() {
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts(initialContacts));
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
