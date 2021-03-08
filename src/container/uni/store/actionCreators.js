
import $ from "jquery"
const getRes=(data)=>{
	 return{
	 	type:"res",
	 	res:data
	 }
}
export const getData=(data)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/uni.js",{data:data},function(res){
			const data=res;
			dispatch(getRes(data))
		})
	}
}