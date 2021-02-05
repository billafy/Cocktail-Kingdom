import React, {useContext} from 'react';
import {AppContext} from './App';
import Loading from './Loading';
import {Link} from 'react-router-dom';
import {GrLinkNext} from 'react-icons/gr';

const CocktailList = () => {
	const {state:{cocktails,isLoading}} = useContext(AppContext);

	if(isLoading)
		return <Loading/>;
	else if(cocktails.length===0)
		return (
			<section className='no-results'>
				<h3>No Results</h3>
			</section>	
		);
	return (
		<section className='cocktail-list'>
			{cocktails.map((cocktail) => {
					return (
						<div key={cocktail.id} className='cocktail-list-item'>
							<img src={cocktail.image}/>
							<p>
								<span className='cocktail-name'>{cocktail.name}</span><br/>
								<span className='cocktail-glass'>{cocktail.glass}</span><br/>
								<span className='cocktail-category'>{cocktail.category}</span>
							</p>
							<Link to={'/cocktailinfo/'+cocktail.id}><GrLinkNext/></Link>
						</div>	
					);
				})}			
		</section>		
	);
}

export default CocktailList;