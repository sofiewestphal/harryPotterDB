import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	result = next(action)

	let { hogwartsHouses, characters, yourHouse } = store.getState()

	console.log(`
        Hogwarts Houses: ${hogwartsHouses.hogwartsHouses}
        filter: ${hogwartsHouses.filter}
		fetching: ${hogwartsHouses.isLoading}
		errors: ${hogwartsHouses.errors}

        Characters: ${characters.characters}
        FavCharacters: ${characters.favCharacters}
        filter: ${characters.filter}
        sort: ${characters.sort}
		fetching: ${characters.isLoading}
        errors: ${characters.errors}
        
        GotHouse: ${yourHouse.gotHouse}
        Your House: ${yourHouse.yourHouse}
		fetching: ${yourHouse.isLoading}
		errors: ${yourHouse.errors}
	`)

	console.groupEnd()

	return result
}
const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

export default (initialState = {}) => {
    console.log(initialState);
	return applyMiddleware(thunk, consoleMessages)(createStore)(rootReducer, initialState, enhancers)
}



