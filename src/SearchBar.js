import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => (
    <div>
        <input 
            className="mainSearchBar"
            onChange={props.onChange} 
            placeholder="Search"/>
    </div>
)

SearchBar.propTypes = {
    onChange: PropTypes.func
  };
   

export default SearchBar;
