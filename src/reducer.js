const reducer = (state,action) => {
	if(action.type==='INIT_DATA') {
		console.log('INITIALIZING');
		const data = action.payload.map((cocktail) => {
			return {
				id: cocktail.idDrink,
				name: cocktail.strDrink,
				image: cocktail.strDrinkThumb,
				category: cocktail.strCategory,
				glass: cocktail.strGlass,
				instructions: cocktail.strInstructions,
				ingredients: [
					cocktail.strIngredient1,
					cocktail.strIngredient2,
					cocktail.strIngredient3,
					cocktail.strIngredient4,
					cocktail.strIngredient5,
					cocktail.strIngredient6,
					cocktail.strIngredient7,
					cocktail.strIngredient8,
					cocktail.strIngredient9,
					cocktail.strIngredient10,
					cocktail.strIngredient11,
					cocktail.strIngredient12,
					cocktail.strIngredient13,
					cocktail.strIngredient14,
					cocktail.strIngredient15,
				],
			};
		});
		return {...state, data:data, isLoading:false, cocktails:data};
	}
	else if(action.type==='FILTER_DATA') {
		console.log('FILTERING');
		if(!action.payload)
			return {...state, cocktails:state.data};
		const cocktails = state.data.filter((cocktail) => {
			if(cocktail.name.toLowerCase().startsWith(action.payload.toLowerCase()))
				return cocktail;
		})
		return {...state, cocktails:cocktails};
	}
	else if(action.type==='SELECT_COCKTAIL') {
		console.log('SELECTING');
		const selectedCocktail = state.data.filter((cocktail) => action.payload===cocktail.id);
		return {...state, selectedCocktail:selectedCocktail[0]};
	}
	return state;
}

export default reducer;