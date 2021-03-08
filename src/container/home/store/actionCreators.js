import $ from 'jquery'
const changeLeftView=(data)=>{
	return{
		type:"changeLeftView",
		leftViewData:data
	}
}

export const getLeftData=()=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/leftView.js",function(res){
			const data=res;
			// console.log(data)
			dispatch(changeLeftView(data))
		})
	}
}



const loginReturn=(data)=>{
	return{
		type:"autoLogin",
		autoLogin:data
			}
}



export const autoLogin=()=>{
	
	return (dispatch)=>{
		$.getJSON("../../../../public/api/login.js",function(res){
			const data=res.result;
			// const data=true;

			console.log(data)
			dispatch(loginReturn(data))
		
		})
	}
}
