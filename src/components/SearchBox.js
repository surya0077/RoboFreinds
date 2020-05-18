import React from 'react';

const SearchBox=({ searchfeild ,searchchange})=>{
	return(
		<div className='pa2'>
		<input type='search' 
		className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'
		placeholder='search robots'
		onChange={searchchange}/>
		</div>
		);
}

export default SearchBox;