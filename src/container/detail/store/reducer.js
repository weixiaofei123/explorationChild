const stateDefault={
	DetailViewData:{},
	vipState:false
}
export default (state=stateDefault,action)=>{
	if (action.type=="changeDetailView") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.DetailViewData=action.DetailViewData;
		return newState;

	}

	if (action.type=="getVip") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.vipState=action.vipState;
		return newState;

	}

	if (action.type=="closed") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.vipState=action.vipState;
		return newState;

	}
	return state;
}