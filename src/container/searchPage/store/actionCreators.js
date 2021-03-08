import $ from 'jquery'
const search=(data)=>{
	return{
		type:"search",
		search:data
	}
}

export const searchData=(data)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/searchData.js",{data:data},function(res){
			const data=res;
			console.log(data)
			dispatch(search(data))
		})
	}
}