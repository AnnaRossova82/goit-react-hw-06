/* import { useSelector, useDispatch } from 'react-redux';
import {  selectContacts } from '../redux/contactsSlice'; */
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
// import initialContacts from '../contacts.json';

function App() {
/*   const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
 */

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