import $ from 'jquery'
const changeShowView=(data)=>{
	return{
		type:"changeShowView",
		showViewData:data
	}
}

export const getShowData=()=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/show.php",function(res){
			const data=res;
			console.log(data)
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