import $ from 'jquery'
const getHighData=(data)=>{
	return{
		type:"highschoolData",
		highschoolData:data
	}
}

export const gethigh=(lesson)=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/highschool.php",{lesson:lesson},function(res){
			const data=res;
			console.log(res)
			dispatch(getHighData(data))
		})
	}
}

export const setPage=(page)=>{
		return{
			type:"setPage",
			page:page
		}
}