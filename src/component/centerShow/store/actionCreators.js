import $ from 'jquery'
const changeCenterShowView=(data)=>{
	return{
		type:"changeCenterShowView",
		CenterShowViewData:data
	}
}

export const getCenterShowData=()=>{
	return (dispatch)=>{
		$.getJSON("https://weixiaofei123.github.io/explorationChild/public/api/centerShow.js",function(res){
			const data=res;
		
			dispatch(changeCenterShowView(data))
		})
	}
}