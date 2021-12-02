import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsOperations from "../../redux/operations";
import "./ContactsList.css";

const ContactItem = ({ onDeleteContact, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
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
    })
  ),
  onDeleteContact: PropTypes.func,
};

const findContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  if (filter) {
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  return allContacts;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: findContact(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
