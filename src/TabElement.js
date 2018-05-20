import React from 'react';

const TabMenu = (props) => {
    return (
        <div className="tabMenu">
            <ul>
                {props.sortOptions.map( 
                    (option, i) => <TabLink 
                                    onClick={props.sortHandler} 
                                    key={i}
                                    id={option.code}>
                                        {option.name}
                                    </TabLink>
                )}
            </ul>
        </div>
    )
}

const TabLink = (props) => <li id={props.id} onClick={props.onClick}>{props.children}</li>



export default TabMenu;