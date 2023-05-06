import PropTypes from 'prop-types';
import { FaUserAlt, FaTrash } from 'react-icons/fa';
import { Icon, Number, Wrapper, Button } from './Contact.styled';
import { deleteContact } from 'redux/contactSlice/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ name, number, id }) => {
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
        <Number>{`${number}`}</Number>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          <FaTrash />
        </Button>
      </Wrapper>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
