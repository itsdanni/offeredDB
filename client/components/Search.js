import React from 'react';
import { SearchBG } from './styled';

const Search = (props) => {
  return (
    <SearchBG>
      <h1>I'm looking for companies in these cities at these stages using these technologies</h1>
      <button type="button" className="btn btn-outline-primary">Let's go!</button>
    </SearchBG>
  )
}

export default Search;
