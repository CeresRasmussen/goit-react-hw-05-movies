import css from 'components/Searchbar/Searchbar.module.css';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const initialValue = { query: '' };

export const Searchbar = ({ onSubmitForm }) => {
  const onSubmit = ({ query }, { resetForm }) => {
    onSubmitForm(query);
    resetForm();
  };

  return (
    <div className={css.Searchbar}>
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form className={css.SearchForm}>
          <Field
            id="query"
            className={css['SearchForm-input']}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <button type="submit" className={css['SearchForm-button']}>
            <span>Search</span>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
