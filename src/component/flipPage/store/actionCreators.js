import $ from 'jquery'
export const changeFi=(page)=>{
	return{
		type:"changeFi",
		bgc:true,
		bgc2:false,
		bgc3:false,
		bgc4:false,
		bgc5:false,
		page:page

	}
}

export const changeSe=(page)=>{
	return{
		type:"changeSe",
		bgc:false,
		bgc2:true,
		bgc3:false,
		bgc4:false,
		bgc5:false,
		page:page

	}
}

export const changeTh=(page)=>{
	return{
		type:"changeTh",
		bgc:false,
		bgc2:false,
		bgc3:true,
		bgc4:false,
		bgc5:false,
		page:page

	}
}

export const changeFo=(page)=>{
	return{
		type:"changeFo",
		bgc:false,
		bgc2:false,
		bgc3:true,
		bgc4:false,
		bgc5:false,
		page:page

	}
}

export const changeFf=(page)=>{
	return{
		type:"changeFf",
		bgc:false,
		bgc2:false,
		bgc3:true,
		bgc4:false,
		bgc5:false,
		page:page

	}
}

