import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import { useLocalStorage } from 'hooks/useLocalStorage';


import { Title, Subtitle } from './App.styled';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // const [filter, setFilter] = useState('');

 
  // const onFilterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>
      <Filter
      
      />
      <ContactList
      // contacts={onFilterContacts}
      />
    </div>
  );
};
