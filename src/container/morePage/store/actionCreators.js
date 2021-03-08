import $ from 'jquery'
const more=(data)=>{
	return{
		type:"more",
		more:data
	}
}

export const moreData=(data)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/moreData.js",{data:data},function(res){
			const data=res;
			console.log(data)
			dispatch(more(data))
		})
	}
}