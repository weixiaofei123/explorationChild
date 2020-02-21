import $ from 'jquery'
const focus=(data)=>{
	return{
		type:"focus",
		focus:data
	}
}

export const getData=()=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/focus.php",function(res){
			const data=res;
		
			dispatch(focus(data))
		})
	}
}