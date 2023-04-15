// import propTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <ListContacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ListContacts>
  );
};

// ContactList.propTypes = {
//   contacts: propTypes.array.isRequired,
//   onDeleteContact: propTypes.func.isRequired,
// };
