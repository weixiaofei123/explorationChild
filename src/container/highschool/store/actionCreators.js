import $ from 'jquery'
const getHighData=(data)=>{
	return{
		type:"highschoolData",
		highschoolData:data
	}
}

export const gethigh=(lesson)=>{
	return (dispatch)=>{
		$.getJSON("https://weixiaofei123.github.io/explorationChild/public/api/highschool.js",{lesson:lesson},function(res){
			const data=res;
	
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