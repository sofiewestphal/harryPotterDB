import React, { Component } from 'react';
import { connect } from 'react-redux';
import HogwartsList from '../representations/ListElement';
import SortingHatContainer from '../containers/SortingHatContainer';
import SearchBar from '../representations/SearchBar';
import '../../styles/App.scss';
import { filterHogwartsHousesList, fetchingHogwartsHouses, successfetchingHogwartsHouses, errorFetchingHogwartsHouses } from '../../actions'

class HogwartsHouses extends Component {

  onChangeHandler(e){
    this.props.filterHogwartsHousesList(e.target.value);
  }

  componentDidMount(){
    this.props.fetchingHogwartsHouses(true);
    fetch("https://www.potterapi.com/v1/houses?key=$2a$10$ezgiwXHEo7k8jYrNQaxgI.33lPObaW/E552rWrwEpHEvJpSaurzG6")
      .then(res => res.json())
      .then(
        (result) => {
          this.props.successfetchingHogwartsHouses(result);
          this.props.fetchingHogwartsHouses(false);
        },
        
        (error) => {
          this.props.fetchingHogwartsHouses(false);
          this.props.errorFetchingHogwartsHouses(error);
        }
      )
  }

  render() {
    const { filter, hogwartsHouses, isLoading } = this.props;
    const data = filter ? 
      hogwartsHouses.filter(
        item => item.name.toLowerCase().includes(filter.toLowerCase())
      ) :
      hogwartsHouses;
    
    return (
      <div className="mainContainer flexContainer">
      {
        !isLoading && hogwartsHouses.length !== 0 &&
        <HogwartsList 
          itemToGet="name"
          data={data}>
          The Hogwarts houses are:
          <SearchBar onChange={this.onChangeHandler.bind(this)}/> 
        </HogwartsList>
      }
        <SortingHatContainer />
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.hogwartsHouses.filter,
    hogwartsHouses: state.hogwartsHouses.hogwartsHouses,
    isLoading: state.hogwartsHouses.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterHogwartsHousesList: value => dispatch(filterHogwartsHousesList(value)), 
    fetchingHogwartsHouses: bool => dispatch(fetchingHogwartsHouses(bool)), 
    successfetchingHogwartsHouses: houses => dispatch(successfetchingHogwartsHouses(houses)), 
    errorFetchingHogwartsHouses: error => dispatch(errorFetchingHogwartsHouses(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HogwartsHouses);