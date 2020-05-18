import React from 'react';

const Scroll=(props)=>{
	
	return (
<div style={{overflow:'Scroll',border :'5px solid black',height:'800px'}}>
{props.children}
</div>
		);
	//return <h1> Hi </h1>
};
export default Scroll;