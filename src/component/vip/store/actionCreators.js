import $ from 'jquery'
const changeShowView=(data)=>{
	return{
		type:"changeShowView",
		showViewData:data
	}
}

export const getShowData=()=>{
	return (dispatch)=>{
		$.getJSON("https://weixiaofei123.github.io/explorationChild/public/api/show.js",function(res){
			const data=res;
			
			dispatch(changeShowView(data))
		})
	}
}

export const displaySlider=()=>{
	return {
		type:"changeSlider",
		SliderState:true
	}
}

export const hideSlider=()=>{
	return {
		type:"hideSlider",
		SliderState:false
	}
}

export const logout=()=>{
	return {
		type:"logout",
		loginout:false
	}
}

export const closed=()=>{
	return {
		type:"closed",
		vipState:false
	}
}

export const getMon=()=>{
	return{
		type:"getmon",
		monData:true
	}
}

export const getSeason=()=>{
	return{
		type:"getseason",
		seasonData:true
	}
}

export const getYear=()=>{
	return{
		type:"getyear",
		yearData:true
	}
}

export const login=()=>{
	return{
		type:"login",
		loginPop:true
	}
}