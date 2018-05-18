import React, { Component } from 'react';
import './App.css';
import HogwartsList from './ListElement';
import SortingHat from './SortingHat';

class HogwartsHouses extends Component {
  constructor(){
    super();
    this.state = {
      key: "$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6",
      error: null,
      isLoaded: false,
      hogwartsHouses: []
    }
  }

  onChangeHandler(e){
    this.setState({
      filter: e.target.value
    })
  }

  componentDidMount(){
    fetch("https://www.potterapi.com/v1/houses?key=$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            hogwartsHouses: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const data = this.state.filter ? 
      this.state.hogwartsHouses.filter(
        item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      ) :
      this.state.hogwartsHouses;
    
    return (
      <div className="flexContainer">
        <HogwartsList 
          onChangeHandler={this.onChangeHandler.bind(this)} 
          itemToGet="name"
          data={data}> 
          The Hogwarts houses are:
        </HogwartsList>
        <SortingHat />
      </div>
      
    )
  }
}

export default HogwartsHouses;
