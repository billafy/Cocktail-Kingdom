import React, {useState, useContext} from 'react';
import CocktailList from './CocktailList';
import {AppContext} from './App';
import {AiOutlineSearch} from 'react-icons/ai';

const Homepage = () => {
	const [searchTerm,setSearchTerm] = useState('');
	const {searchCocktailList} = useContext(AppContext);

	const getNewList = () => {
		searchCocktailList(searchTerm);
	}

	return (
		<section className='homepage'>
			<form className='search-bar'>
				<input type='text' placeholder='Search' value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}></input>
				<button type='button' onClick={getNewList}><AiOutlineSearch/></button>
			</form>
			<CocktailList/>
		</section>
	);
}

export default Homepage;