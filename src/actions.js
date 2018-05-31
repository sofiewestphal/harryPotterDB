/* action types */

export const CHARACTERS_ADD_FAVORITE = 'CHARACTERS_ADD_FAVORITE'; 
export const CHARACTERS_REMOVE_FAVORITE = 'CHARACTERS_REMOVE_FAVORITE';
export const CHARACTERS_FILTER_LIST = 'CHARACTERS_FILTER_LIST';
export const CHARACTERS_SORT_LIST = 'CHARACTERS_SORT_LIST';
export const CHARACTERS_FETCH_DATA_SUCCESS = 'CHARACTERS_FETCH_DATA_SUCCESS';
export const CHARACTERS_FETCH_ERROR = 'CHARACTERS_FETCH_ERROR';
export const CHARACTERS_IS_LOADING = 'CHARACTERS_IS_LOADING';
export const HOUSES_FILTER_LIST = 'HOUSES_FILTER_LIST';
export const HOUSES_FETCH_DATA_SUCCESS = 'HOUSES_FETCH_DATA_SUCCESS';
export const HOUSES_FETCH_ERROR = 'HOUSES_FETCH_ERROR';
export const HOUSES_IS_LOADING = 'HOUSES_IS_LOADING';
export const YOUR_HOUSE_FETCH_DATA_SUCCESS = 'YOUR_HOUSE_FETCH_DATA_SUCCESS';
export const YOUR_HOUSE_FETCH_ERROR = 'YOUR_HOUSE_FETCH_ERROR';
export const YOUR_HOUSE_IS_LOADING = 'YOUR_HOUSE_IS_LOADING';

/* other constants */
export const sortOptions = [
    {name: 'Show All', code: null},
    {name: 'Ministry of Magic', code: 'ministryOfMagic'}, 
    {name: 'Order of the Phoenix', code: 'orderOfThePhoenix'},
    {name: 'Dumbledores Army' , code: 'dumbledoresArmy'},
    {name: 'Death Eater' , code: 'deathEater'}
]

/* action creators */

export function addFavoriteCharacter(characterName){
    return{
        type: CHARACTERS_ADD_FAVORITE,
        payload: characterName
    }
}

export function removeFavoriteCharacter(index){
    return{
        type: CHARACTERS_REMOVE_FAVORITE,
        payload: index
    }
}

export function filterCharacterList(filterBy){
    return {
        type: CHARACTERS_FILTER_LIST,
        payload: filterBy
    }
}

export function sortCharacterList(sortOption){
    return{
        type: CHARACTERS_SORT_LIST,
        payload: sortOption
    }
}

export function fetchingCharacters(bool){
    return{
        type: CHARACTERS_IS_LOADING,
        payload: bool
    }
}

export function successfetchingCharacters(items){
    return{
        type: CHARACTERS_FETCH_DATA_SUCCESS,
        payload: items
    }
}

export function errorFetchingCharacters(error){
    return{
        type: CHARACTERS_FETCH_ERROR,
        payload: error
    }
}

export function filterHogwartsHousesList(filterBy){
    return {
        type: HOUSES_FILTER_LIST,
        payload: filterBy
    }
}

export function fetchingHogwartsHouses(bool){
    return{
        type: HOUSES_IS_LOADING,
        payload: bool
    }
}

export function successfetchingHogwartsHouses(items){
    return{
        type: HOUSES_FETCH_DATA_SUCCESS,
        payload: items
    }
}

export function errorFetchingHogwartsHouses(error){
    return{
        type: HOUSES_FETCH_ERROR,
        payload: error
    }
}

export function fetchingYourHouse(bool){
    return{
        type: YOUR_HOUSE_IS_LOADING,
        payload: bool
    }
}

export function successfetchingYourHouse(house){
    return{
        type: YOUR_HOUSE_FETCH_DATA_SUCCESS,
        payload: house
    }
}

export function errorFetchingYourHouse(error){
    return{
        type: YOUR_HOUSE_FETCH_ERROR,
        payload: error
    }
}