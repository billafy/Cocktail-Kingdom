import React, {useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import {GrLinkNext} from 'react-icons/gr';
import Loading from './Loading';
import {AppContext} from './App';

const CocktailInfo = () => {
	const {state:{isLoading,selectedCocktail},getCocktail,getCocktailList} = useContext(AppContext);
	const {id} = useParams();

	useEffect(() => {
		getCocktailList();
		getCocktail(id);
	}, [getCocktail,getCocktailList,id]);

	if(isLoading || !selectedCocktail)
		return <Loading/>;
	return (
		<div className='single-cocktail'>
			<img src={selectedCocktail.image}/>
			<div className='info'>
				<h3>Drink : </h3><span> {selectedCocktail.name}</span><br/>
				<h3>Glass : </h3><span> {selectedCocktail.glass}</span><br/>
				<h3>Category : </h3><span> {selectedCocktail.category}</span><br/>
				<h3>Instructions : </h3><span> {selectedCocktail.instructions}</span><br/>
				<h3>Ingredients : </h3>
				{selectedCocktail.ingredients &&
					<> 
						<span>
							{selectedCocktail.ingredients.map((ingredient) => {
								if(ingredient)
									return (
										<span> {ingredient},</span>	
									);
							})}
						</span><br/>
					</>}
				<button type='button'><Link to='/'><GrLinkNext/></Link></button>
			</div>			
		</div>
	);
}

export default CocktailInfo;