import React from 'react';

const SortingHat = props => {
    const html = props.gotHouse ? 
            <div>Your house is: {props.yourHouse}</div> : 
            <button 
                onClick={props.getHouse}>
                Get your house
            </button>;             
        
        return (
            <div id="yourHouseContainer">
                <h1>Your own house at Hogwarts</h1>
                {html}               
            </div>
        )
}

export default SortingHat;