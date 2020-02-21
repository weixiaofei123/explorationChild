import $ from 'jquery'
const getUniData=(data)=>{
	return{
		type:"universityData",
		universityData:data
	}
}

const userExist=(data)=>{
	return{
		type:"userExist",
		userExist:data
	}
}


const registerReturn=(data)=>{
	return{
		type:"registerReturn",
		registerReturn:data
	}
}

export const passWord=(result)=>{
	return{
		type:"passWordR",
		passWordR:result
	}
}

export const phone=(result)=>{
	return{
		type:"phone",
		phone:result
	}
}

export const reEnterPassword=(samePassword)=>{
	return{
		type:"samePassword",
		samePassword:samePassword
	}
}

// export const verify=(code)=>{
// 	return{
// 		type:"verification",
// 		verification:code
// 	}
// }

export const verification=(phone,phoneNo)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/university.js",{phoneNo:phoneNo},function(res){
			const data=res;
			
		
		})
	}
}


export const getUni=(lesson)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/university.js",{lesson:lesson},function(res){
			const data=res;
			
			dispatch(getUniData(data))
		})
	}
}

export const handleUser=(value)=>{
	
	return (dispatch)=>{
		$.getJSON("../../../../public/api/user.js",{value:value},function(res){
			const data=res;
			
			dispatch(userExist(data))
		})
	}
}


export const register=(userName,passWord,confirmPassword)=>{
	
	return (dispatch)=>{
		$.post("../../../../public/api/register.php",{userName:userName,passWord:passWord,confirmPassword:confirmPassword},function(res){
			const data=res;
			dispatch(registerReturn(data))
		})
	}
}

