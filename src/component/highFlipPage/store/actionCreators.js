import $ from 'jquery'
export const changeFi=(page)=>{
	return{
		type:"changeFiHigh",
		bgc:true,
		bgc2:false,
	
		page:page

	}
}

export const changeSe=(page)=>{
	return{
		type:"changeSeHigh",
		bgc:false,
		bgc2:true,
		
		page:page

	}
}





