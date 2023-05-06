import PropTypes from 'prop-types';
import { FaUserAlt, FaTrash } from 'react-icons/fa';
import { Icon, Number, Wrapper, Button } from './Contact.styled';
// import { deleteContact } from 'redux/contactSlice/contactsSlice';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
        <p>{`${name}`}</p>
      </Wrapper>
      <Wrapper>
        <Number>{`${phone}`}</Number>
        <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
          <FaTrash />
        </Button>
      </Wrapper>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
