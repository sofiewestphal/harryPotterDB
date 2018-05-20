import React from 'react';
import logo from './images/logo.jpg'

class SortingHat extends React.Component {
    constructor(){
        super();
        this.state = {
            gotHouse: false,
            isLoaded: false,
            error: null,
            yourHouse: ''
        }
        this.getHouse = this.getHouse.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem('yourHouse')){
            const yourHouseFromStorage = localStorage.getItem('yourHouse');
            this.setState({
                gotHouse: true,
                yourHouse: yourHouseFromStorage
            })
        }
        document.getElementById('yourHouseContainer').style.backgroundImage = `url(${logo})`;
    }

    getHouse(){
        fetch("https://www.potterapi.com/v1/sortinghat?key=$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    gotHouse: true,
                    isLoaded: true,
                    yourHouse: result
                });
                localStorage.setItem('yourHouse', result);
            },
    
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){
        const html = this.state.gotHouse ? 
            <div>Your house is: {this.state.yourHouse}</div> : 
            <button 
                ref="btnGetHouse" 
                onClick={this.getHouse}>
                Get your house
            </button>;             
        
        return (
            <div id="yourHouseContainer">
                <h1>Get your own house at Hogwarts</h1>
                {html}               
            </div>
        )
    }
}

export default SortingHat;