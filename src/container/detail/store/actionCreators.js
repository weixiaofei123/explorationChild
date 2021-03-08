import $ from 'jquery'
const changeDetailView=(data)=>{
	return{
		type:"changeDetailView",
		DetailViewData:data
	}
}

export const getVip=()=>{
	return{
		type:"getVip",
		vipState:true
	}
}

export const getDetailData=(data,table,id)=>{
	return (dispatch)=>{
		$.getJSON("https://weixiaofei123.github.io/explorationChild/public/api/DetailView.js",{data:data,table:table,id:id},function(res){
			const data=res;
			console.log(data)
			dispatch(changeDetailView(data))
		})
	}
}