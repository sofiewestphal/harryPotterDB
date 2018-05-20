import React from 'react';
import SearchBar from './SearchBar';

const HogwartsList = props => {
    return (
      <div className="listContainer">
        <h1>{props.children}</h1>
        <SearchBar onChange={props.onChangeHandler}/>
        {props.data.map( (item, i) => {
          return (
            <HogwartsItem 
              key={item._id} 
              hogwartsItemName={item[props.itemToGet]} 
            />
          )
        })}
    </div>
    );
  }
  
  const HogwartsItem = props => {
    return <p>{props.hogwartsItemName}</p>;
  }

  export default HogwartsList;