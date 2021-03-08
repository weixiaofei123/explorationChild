import $ from 'jquery'
const getMostPop=(data)=>{
	return{
		type:"mostPop",
		mostPop:data
	}
}

export const getData=()=>{
	return (dispatch)=>{
		// console.log("here")
		$.getJSON("../../../../public/api/mostPop.js",function(res){
			const data=res;

			console.log(data)
			dispatch(getMostPop(data))
		})
	}
}