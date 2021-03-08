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
		$.getJSON("https://weixiaofei123.github.io/explorationChild/public/api/mostPop.js",function(res){
			const data=res;

			console.log(data)
			dispatch(getMostPop(data))
		})
	}
}