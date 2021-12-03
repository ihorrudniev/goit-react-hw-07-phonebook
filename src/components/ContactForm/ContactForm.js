import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/operations';
import PropsType from 'prop-types';
import { getContacts } from '../../redux/selectors';
import shortid from 'shortid';
import './Form.css';

class ContactsForm extends Component {
  initialState = {
    name: '',
    number: '',
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const hasContacts = contact =>
      contact.name === this.state.name || contact.number === this.state.number;

    if (this.props.items.some(hasContacts)) {
      alert(`Contact is already in contacts`);
      return;
    }

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState(this.initialState);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label className="Form__label" htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label lassName="Form__label" htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <br />
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.PropsType = {
  onSubmit: PropsType.func.isRequired,
};

const mapStateToProps = state => ({
  items: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
