import $ from 'jquery'
const getPrimaryData=(data)=>{
	return{
		type:"primaryData",
		primaryData:data
	}
}

export const getData=(no)=>{
	return (dispatch)=>{
		// console.log("here")
		$.getJSON("https://weixiaofei123.github.io/explorationChild/public/api/View.js",{no:no},function(res){
			const data=res;

			// console.log(data)
			dispatch(getPrimaryData(data))
		})
	}
}