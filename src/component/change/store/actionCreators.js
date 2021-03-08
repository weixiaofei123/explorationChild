import $ from 'jquery'
const focus=(data)=>{
	return{
		type:"focus",
		focus:data
	}
}

export const getData=()=>{
	return (dispatch)=>{
		$.getJSON("https://weixiaofei123.github.io/explorationChild/public/api/focus.js",function(res){
			const data=res;
		
			dispatch(focus(data))
		})
	}
}