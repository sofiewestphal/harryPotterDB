import React from 'react';
import PropTypes from 'prop-types';

const ToggleList = props => {
    return (
      <div className="listContainer">
        <h1>{props.children}</h1>
        {props.data.map( (item, i) => {
          return (
            <ToggleListItem
            onClick={props.onRemoveClickHandler} 
            key={i} 
            ToggleItemName={item} 
            />
          )
        })}
    </div>
    );
  }
  
  const ToggleListItem = props => {
    return (
      <div className="flexRow">
        <p>
        {props.ToggleItemName}
        </p>
        <p id={props.ToggleItemName}
        onClick={props.onClick}>
        X
        </p>
      </div>
    );
  }

  ToggleList.PropTypes = {
    data: PropTypes.array
  }

  ToggleListItem.PropTypes = {
    onRemoveClick: PropTypes.func
  }

  export default ToggleList;