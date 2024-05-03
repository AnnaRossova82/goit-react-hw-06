import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts, selectContacts } from '../redux/contactsSlice';
import { selectNameFilter } from '../redux/filtersSlice'; 
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import initialContacts from '../contacts.json';

function App() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter); // Оновлено імпорт та використання селектора
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts(initialContacts));
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase()) // Оновлено використання фільтра
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;