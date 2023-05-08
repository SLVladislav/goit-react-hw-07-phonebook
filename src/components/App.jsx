import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';
import { Container, Title, Header, Subtitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { filterContacts } from 'redux/Filter/filterSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const filterState = useSelector(getFilter);
  // console.log(filterState);
  const { items, isLoading, error } = useSelector(getContacts);
  // const { items, isLoading, error } = useSelector(state => state.contacts);
  // console.log(items);
  // console.log(isLoading);

  // const { items, isLoading, error } = useSelector(
  //   state => state.contacts.items
  // );
  // const qwe = useSelector(state => state.contacts);
  // console.log(qwe);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filterState.toLowerCase())
    );
  };
  // console.log(isLoading);
  return (
    <Container>
      <Header>
        Phone<Title>book</Title>
      </Header>
      <ContactForm contacts={items} />
      <Subtitle>Contacts</Subtitle>
      <Filter filter={filterState} handleChangeFilter={handlChangeFilter} />
      {isLoading && <p>Loading contacts...</p>}
      {items.length > 0 && (
        <ContactList
          contacts={items.length}
          visibleContacts={getVisibleContacts()}
        />
      )}
      {error && <p>{error}</p>}
    </Container>
  );
}

// addContact={store} contacts={contacts}
// handlChangeFilter={handlChangeFilter} filter={filter}
