import React, { Component } from 'react';
import HogwartsList from './ListElement';
import './App.css';

class HogwartsCharacters extends Component {
  constructor(){
    super();
    this.state = {
      key: "$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6",
      error: null,
      isLoaded: false,
      characters: []
    }
  }

  onChangeHandler(e){
    this.setState({
      filter: e.target.value
    })
  }

  componentDidMount(){
    fetch("https://www.potterapi.com/v1/characters?key=$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            characters: result
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
      this.state.characters.filter(
        item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      ) :
      this.state.characters;

    return (
        <HogwartsList
            onChangeHandler={this.onChangeHandler.bind(this)} 
            data={data}
            itemToGet="name">
            The Hogwarts characters are:
        </ HogwartsList>
    )
  }
}

export default HogwartsCharacters;