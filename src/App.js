import React, {useEffect, useReducer} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import CocktailInfo from './CocktailInfo';
import About from './About';
import Error from './Error';
import reducer from './reducer';
import './cocktail.css';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppContext = React.createContext();

const defaultStates = {
	data : [],
	isLoading : true,
	cocktails : [],
	selectedCocktail : {}
};

const App = () => {
	const [state,dispatch] = useReducer(reducer,defaultStates);

	const getCocktailList = () => {
		fetch(url)
		.then((response) => {
			if(response.status>=200 && response.status<=299)
				return response.json();
		})
		.then((data) => {
			dispatch({type:'INIT_DATA',payload:data.drinks});
		})
	}

	const getCocktail = (id) => {
		dispatch({type:'SELECT_COCKTAIL',payload:id});
	}

	const searchCocktailList = (searchTerm) => {
		dispatch({type:'FILTER_DATA',payload:searchTerm})
	}

	useEffect(() => {
		getCocktailList();
	}, []);

	return (
		<AppContext.Provider value={{state, searchCocktailList, getCocktail,getCocktailList}}>
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path='/'>
						<Homepage/>
					</Route>		
					<Route path='/about'>
						<About/>
					</Route>
					<Route path='/cocktailinfo/:id' children={<CocktailInfo/>}></Route>
					<Route path='*'>
						<Error/>
					</Route>
				</Switch>
			</Router>	
		</AppContext.Provider>
	);
}

export default App;
