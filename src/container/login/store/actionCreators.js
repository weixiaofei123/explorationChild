import $ from 'jquery'


const loginReturn=(data,userName)=>{
	return{
		type:"loginReturn",
		loginReturn:data,
		loginName:userName
	}
}

export const afterLogin=()=>{
	return{
		type:"afterLogin",
		loginPop:false
		
	}
}

export const login=(userName,passWord)=>{
	
	return (dispatch)=>{
		$.post("../../../../public/api/login.js",{userName:userName,passWord:passWord},function(res){
			const data=res.result;
			// const data=true;

			console.log(data)
			dispatch(loginReturn(data,userName))
		
		},"json")
	}
}


