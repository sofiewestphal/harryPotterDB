import React, { Component } from 'react';
import { connect } from 'react-redux';

import HogwartsList from '../representations/ListElement';
import ToggleList from '../representations/ToggleList';
import TabMenu from '../representations/TabElement';
import SearchBar from '../representations/SearchBar';
import '../../styles/App.scss';
import { addFavoriteCharacter, removeFavoriteCharacter, filterCharacterList, sortCharacterList, fetchingCharacters, successfetchingCharacters, errorFetchingCharacters } from '../../actions'



class HogwartsCharacters extends Component {

  constructor(){
    super();
    this.state = {
      key: "$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6",
      error: null,
      isLoaded: false,
      characters: [],
      favCharacters: [],
      sortOptions: [
          {name: 'Show All', code: null},
          {name: 'Ministry of Magic', code: 'ministryOfMagic'}, 
          {name: 'Order of the Phoenix', code: 'orderOfThePhoenix'},
          {name: 'Dumbledores Army' , code: 'dumbledoresArmy'},
          {name: 'Death Eater' , code: 'deathEater'}
        ]
    }
  }

  componentDidMount(){
    this.props.fetchingCharacters(true);
    fetch("https://www.potterapi.com/v1/characters?key=$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6")
      .then(res => res.json())
      .then(
        (result) => {
          this.props.fetchingCharacters(false);
          this.props.successfetchingCharacters(result);
        },

        (error) => {
          this.props.errorFetchingCharacters(error);
          this.props.fetchingCharacters(false)
        }
      )
  }

  onClickHandler(e){
    if(this.props.favCharacters.indexOf(e.target.innerHTML) < 0){
      console.log(e.target.innerHTML)
      this.props.addFavoriteCharacter(e.target.innerHTML)
      // this.setState(
      //   {favCharacters: [...this.state.favCharacters, e.target.innerHTML]},
      //   () => localStorage.setItem('favCharacters', JSON.stringify(this.state.favCharacters))
      // )
    }
  }

  onRemoveClickHandler(e){
    const index = this.props.favCharacters.indexOf(e.target.id);
    this.props.removeFavoriteCharacter(index);
    
    // this.setState(
    //   {favCharacters: },
    //   () => localStorage.setItem('favCharacters', JSON.stringify(this.state.favCharacters))
    // )
  }

  onChangeHandler(e){
    this.props.filterCharacterList(e.target.value)
  }

  sortHandler(e){
    this.props.sortCharacterList(e.target.id)
  }

  render() {

    const { filter, sort, sortOptions, characters, favCharacters, isLoading, error } = this.props;

    const data = filter ? 
      characters.filter(
        item => item.name.toLowerCase().includes(filter.toLowerCase())
      ) : sort ?
        characters.filter(
          item => item[sort] == true
        ) : characters;

    return (
        <div>
            <TabMenu 
                sortOptions={sortOptions}
                sortHandler={this.sortHandler.bind(this)}/>
            <div className="mainContainer flexContainer">
            {
              !isLoading && characters.length !== 0 &&
                <HogwartsList
                onClickHandler = {this.onClickHandler.bind(this)}
                onChangeHandler = {this.onChangeHandler.bind(this)} 
                data={data}
                itemToGet="name">
                The Hogwarts characters are:
                <SearchBar onChange={this.onChangeHandler.bind(this)}/> 
              </ HogwartsList>  
            }
                
                <ToggleList
                    onRemoveClickHandler = {this.onRemoveClickHandler.bind(this)}
                    data={favCharacters}>
                    Your favorite characters:
                </ ToggleList>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.characters.filter,
    sort: state.characters.sort,
    characters: state.characters.characters,
    favCharacters: state.characters.favCharacters,
    isLoading: state.characters.isLoading,
    sortOptions: state.characters.sortOptions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavoriteCharacter: (name) => dispatch(
      addFavoriteCharacter(name)
    ),

    removeFavoriteCharacter: (name) => dispatch(
      removeFavoriteCharacter(name)
    ),

    filterCharacterList: (name) => dispatch(
      filterCharacterList(name)
    ),

    sortCharacterList: (name) => dispatch(
      sortCharacterList(name)
    ),

    fetchingCharacters: (bool) => dispatch(
      fetchingCharacters(bool)
    ),

    successfetchingCharacters: (characters) => dispatch(
      successfetchingCharacters(characters)
    ),

    errorFetchingCharacters: (error) => dispatch(
      errorFetchingCharacters(error)
    ),    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HogwartsCharacters);