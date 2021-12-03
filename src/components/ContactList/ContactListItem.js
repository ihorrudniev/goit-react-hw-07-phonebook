import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/operations';
import { findContact } from '../../redux/selectors';
import './ContactsList.css';

const ContactItem = ({ onDeleteContact, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <ul>
          <li className="Contacts__item" key={id}>
            {name}: {number}
            <button
              className="Contacts__btn"
              type="submit"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      );
    })}
  </>
);

ContactItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: findContact(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
