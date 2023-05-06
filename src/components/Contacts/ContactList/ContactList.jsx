import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import { Item } from './ContactList.styled';
// import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice/contactsSlice';

const ContactList = ({ contacts, visibleContacts }) => {
  // const dispatch = useDispatch();s

  return contacts ? (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              phone={phone}
              deleteContact={deleteContact(id)}
              id={id}
            />
          </Item>
        );
      })}
    </ul>
  ) : (
    <></>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.number.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
