import { 
    CHARACTERS_ADD_FAVORITE, 
    CHARACTERS_REMOVE_FAVORITE, 
    CHARACTERS_FILTER_LIST, 
    CHARACTERS_SORT_LIST, 
    CHARACTERS_FETCH_DATA_SUCCESS, 
    CHARACTERS_FETCH_ERROR,
    CHARACTERS_IS_LOADING,
    HOUSES_FILTER_LIST,
    HOUSES_FETCH_DATA_SUCCESS, 
    HOUSES_FETCH_ERROR,
    HOUSES_IS_LOADING,
    YOUR_HOUSE_FETCH_DATA_SUCCESS, 
    YOUR_HOUSE_FETCH_ERROR,
    YOUR_HOUSE_IS_LOADING
} from '../actions';

import { combineReducers } from 'redux';

export const hogwartsHouses = (state = {
    "filter": null,
    "hogwartsHouses": [],
    "isLoading": false,
    "error": null
}, action) => {
    switch (action.type){
        case HOUSES_FILTER_LIST:
            return updateObject(state, {filter : action.payload});
        
        case HOUSES_FETCH_DATA_SUCCESS:
            return updateObject(state, {hogwartsHouses : action.payload});

        case HOUSES_FETCH_ERROR:
            return updateObject(state, {error: action.payload});

        case HOUSES_IS_LOADING:
            return updateObject(state, {isLoading : action.payload});

        default: 
            return state;
    }
}

export const characters = (state = {
    "filter": null,
    "sort": null,
    "characters": [],
    "favCharacters": [],
    "isLoading": false,
    "error": null,
    "sortOptions": [
        {name: 'Show All', code: null},
        {name: 'Ministry of Magic', code: 'ministryOfMagic'}, 
        {name: 'Order of the Phoenix', code: 'orderOfThePhoenix'},
        {name: 'Dumbledores Army' , code: 'dumbledoresArmy'},
        {name: 'Death Eater' , code: 'deathEater'}
      ]
}, action) => {
    switch (action.type){

        case CHARACTERS_ADD_FAVORITE:
            return updateObject(state, {favCharacters: [...state.favCharacters, action.payload]});

        case CHARACTERS_REMOVE_FAVORITE: 
            return updateObject(state, {favCharacters: [
                ...state.favCharacters.slice(0, action.payload), 
                ...state.favCharacters.slice(action.payload + 1)
              ]});
            
        
        case CHARACTERS_FILTER_LIST: 
            return updateObject(state, {filter: action.payload});

        case CHARACTERS_SORT_LIST: 
            return updateObject(state, {sort: action.payload});

        case CHARACTERS_FETCH_DATA_SUCCESS:
            return updateObject(state, {characters: action.payload}); 

        case CHARACTERS_FETCH_ERROR: 
        return updateObject(state, {error: action.payload}); 

        case CHARACTERS_IS_LOADING: 
            return updateObject(state, {isLoading : action.payload});
            
        default: 
            return state;
    }
}

export const yourHouse = (state = {
    gotHouse: false,
    yourHouse: null,
    isLoading: false,
    error: null
}, action) => {
    switch (action.type){

        case YOUR_HOUSE_FETCH_DATA_SUCCESS: 
            return updateObject(state, {yourHouse: action.payload, gotHouse: true});

        case YOUR_HOUSE_FETCH_ERROR: 
            return updateObject(state, {error: action.payload});
        
        case YOUR_HOUSE_IS_LOADING: 
            return updateObject(state, {isLoading: action.payload});

        default: 
            return state;
    }
}

function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

const rootReducer = combineReducers({
    hogwartsHouses,
    characters,
    yourHouse
})

export default rootReducer;