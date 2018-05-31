import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const HogwartsList = props => {
    return (
      <div className="listContainer">
        <h1>{props.children}</h1>
        
        {props.data.map( (item, i) => {
          return (
            <HogwartsItem
              onClick={props.onClickHandler} 
              key={item._id} 
              hogwartsItemName={item[props.itemToGet]} 
            />
          )
        })}
    </div>
    );
  }
  
  const HogwartsItem = props => {
    return (
      <p
      onClick={props.onClick}>
      {props.hogwartsItemName}
      </p>
    );
  }

  HogwartsList.PropTypes = {
    data: PropTypes.array
  }

  HogwartsItem.PropTypes = {
    hogwartsItemName: PropTypes.string,
    onClick: PropTypes.func
  }

  export default HogwartsList;