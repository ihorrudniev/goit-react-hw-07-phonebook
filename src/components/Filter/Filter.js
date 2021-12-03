import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <>
    <h3 className="Filter__title">Find contacts by name</h3>
    <input
      className="Filter__input"
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
