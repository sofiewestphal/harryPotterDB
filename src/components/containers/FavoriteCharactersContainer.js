import React, { Component } from 'react';
import HogwartsList from './ListElement';
import ToggleList from './ToggleList';
import TabMenu from './TabElement';
import './App.scss';

class FavoriteCharactersContainer extends Component {
  constructor(){
    super();
    this.state = {
      favCharacters: []
    }
  }

  componentDidMount(){
      if(localStorage.getItem('favCharacters')){
        this.setState({
          favCharacters: JSON.parse(localStorage.getItem('favCharacters'))
        })
      }
  }

  onClickHandler(e){
    if(this.state.favCharacters.indexOf(e.target.innerHTML) < 0){
      this.setState(
        {favCharacters: [...this.state.favCharacters, e.target.innerHTML]},
        () => localStorage.setItem('favCharacters', JSON.stringify(this.state.favCharacters))
      )
    }
  }

  onRemoveClickHandler(e){
    const index = this.state.favCharacters.indexOf(e.target.id);
    
    this.setState(
      {favCharacters: [
        ...this.state.favCharacters.slice(0, index), 
        ...this.state.favCharacters.slice(index + 1)
      ]},
      () => localStorage.setItem('favCharacters', JSON.stringify(this.state.favCharacters))
    )
  }

  render() {

    return (
      <ToggleList
          onRemoveClickHandler = {this.onRemoveClickHandler.bind(this)}
          data={this.state.favCharacters}>
          Your favorite characters:
      </ ToggleList>
    )
  }
}

export default FavoriteCharactersContainer;