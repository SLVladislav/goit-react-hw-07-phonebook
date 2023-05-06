import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';
import { Container, Title, Header, Subtitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { filterContacts } from 'redux/Filter/filterSlice';

export default function App() {
  const filterState = useSelector(getFilter);
  const contactsState = useSelector(getContacts);

  const dispatch = useDispatch();
  
  const handlChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filterState.toLowerCase();
    return contactsState.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <Container>
      <Header>
        Phone<Title>book</Title>
      </Header>
      <ContactForm contacts={contactsState} />
      <Subtitle>Contacts</Subtitle>
      <Filter filter={filterState} handleChangeFilter={handlChangeFilter} />
      <ContactList
        visibleContacts={getVisibleContacts()}
        contacts={contactsState.length}
      />
    </Container>
  );
}

// addContact={store} contacts={contacts}
// handlChangeFilter={handlChangeFilter} filter={filter}
