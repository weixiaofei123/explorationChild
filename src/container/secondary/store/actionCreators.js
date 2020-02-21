import $ from 'jquery'
const getSecData=(data)=>{
	return{
		type:"secondaryData",
		secondaryData:data
	}
}

export const getSec=(lesson)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/secondary.php",{lesson:lesson},function(res){
			const data=res;
			
			dispatch(getSecData(data))
		})
	}
}