import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {getContacts, getFilter } from 'redux/selectors'

import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)


  const onFilterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <ListContacts>
      {onFilterContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ListContacts>
  );
};


  // const onFilterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );