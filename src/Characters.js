import React, { Component } from 'react';
import HogwartsList from './ListElement';
import TabMenu from './TabElement';
import './App.scss';

class HogwartsCharacters extends Component {
  constructor(){
    super();
    this.state = {
      key: "$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6",
      error: null,
      isLoaded: false,
      characters: [],
      sortOptions: [
          {name: 'Show All', code: null},
          {name: 'Ministry of Magic', code: 'ministryOfMagic'}, 
          {name: 'Order of the Phoenix', code: 'orderOfThePhoenix'},
          {name: 'Dumbledores Army' , code: 'dumbledoresArmy'},
          {name: 'Death Eater' , code: 'deathEater'}
        ]
    }
  }

  onChangeHandler(e){
    this.setState({
      filter: e.target.value
    })
  }

  sortHandler(e){
    console.log(e.target.id);
    this.setState({
        sort: e.target.id
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
      ) : this.state.sort ?
      this.state.characters.filter(
        item => item[this.state.sort] == true
      ) : this.state.characters;

    return (
        <div>
            <TabMenu 
                sortOptions={this.state.sortOptions}
                sortHandler={this.sortHandler.bind(this)}/>
            <div className="mainContainer">
                <HogwartsList
                    onChangeHandler={this.onChangeHandler.bind(this)} 
                    data={data}
                    itemToGet="name">
                    The Hogwarts characters are:
                </ HogwartsList>
            </div>
        </div>
    )
  }
}

export default HogwartsCharacters;