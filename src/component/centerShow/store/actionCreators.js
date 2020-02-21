import $ from 'jquery'
const changeCenterShowView=(data)=>{
	return{
		type:"changeCenterShowView",
		CenterShowViewData:data
	}
}

export const getCenterShowData=()=>{
	return (dispatch)=>{
		$.getJSON("../../../../public/api/centerShow.php",function(res){
			const data=res;
		
			dispatch(changeCenterShowView(data))
		})
	}
}