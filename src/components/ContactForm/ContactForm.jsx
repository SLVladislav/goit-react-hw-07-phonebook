import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Title, Input, Button } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';

export default function ContactForm({ contacts }) {
  console.log(contacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handlSubmit = e => {
    e.preventDefault();

    const isIncludes = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isIncludes
      ? alert(`${name} is already in contacts`)
      : dispatch(addContacts({ name, phone }));

    reset();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handlSubmit}>
      <Label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        <Title>Phone</Title>
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
};
