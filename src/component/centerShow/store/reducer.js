const stateDefault={
	CenterShowViewData:[]
}
export default (state=stateDefault,action)=>{
		if (action.type=="changeCenterShowView") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.CenterShowViewData=action.CenterShowViewData;
		return newState;

	}
	return state;
}