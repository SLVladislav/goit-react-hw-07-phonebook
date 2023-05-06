import PropTypes from 'prop-types';
import { Label, Text, Input } from './Filter.styled';


export default function Filter({ filter, handleChangeFilter }) {
  return (
    <Label>
      <Text> Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={filter}
      />
    </Label>
  );
}

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
