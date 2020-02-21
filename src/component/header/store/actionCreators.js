import $ from 'jquery'
const changeShowView=(data)=>{
	return{
		type:"changeShowView",
		showViewData:data
	}
}

export const getShowData=()=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/show.js",function(res){
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

const logout1=()=>{
	return {
		type:"logout",
		loginout:false
	}
}

export const logout=()=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/logout.php",function(res){
		console.log(res)
		dispatch(logout1())
	})
	}
}