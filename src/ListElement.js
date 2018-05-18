import React from 'react';
import SearchBar from './SearchBar';

const HogwartsList = props => {
    return (
      <div>
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
    return <h4>{props.hogwartsItemName}</h4>;
  }

  export default HogwartsList;