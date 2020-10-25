import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchForm = ({ handleSubmitProp }) => {
  return (
    <Form onSubmit={handleSubmitProp} style={{ margin: '3rem' }}>
      <Form.Row>
        <Form.Control
          id="searchbar"
          type="text"
          size="sm"
          placeholder="Search for a song"
        ></Form.Control>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
