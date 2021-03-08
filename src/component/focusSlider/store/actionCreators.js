import $ from 'jquery'
const focus=(data)=>{
	return{
		type:"focus",
		focus:data
	}
}

export const getData=()=>{
	return (dispatch)=>{
<<<<<<< HEAD
<<<<<<< HEAD
		$.getJSON("../public/api/focus.js",function(res){
=======
		$.getJSON("../../../../public/api/focus.js",function(res){
>>>>>>> 8ffc8866fbf29439fcaae3f5f9ae8e89595abd9c
=======
		$.getJSON("../../../../public/api/focus.js",function(res){
>>>>>>> 8ffc8866fbf29439fcaae3f5f9ae8e89595abd9c
			const data=res;
		
			dispatch(focus(data))
		})
	}
}