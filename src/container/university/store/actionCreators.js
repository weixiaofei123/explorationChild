import $ from 'jquery'
const getUniData=(data)=>{
	return{
		type:"universityData",
		universityData:data
	}
}

export const getUni=(lesson)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/university.js",{lesson:lesson},function(res){
			const data=res;
			console.log(data)
			dispatch(getUniData(data))
		})
	}
}