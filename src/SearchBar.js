import React from 'react';

const SearchBar = (props) => (
    <div>
        <input 
            className="mainSearchBar"
            onChange={props.onChange} 
            placeholder="Search"/>
    </div>
)
   

export default SearchBar;
