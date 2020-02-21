const stateDefault={
	primaryData2:[]
}
export default (state=stateDefault,action)=>{
	if (action.type=="primaryData") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.primaryData2=action.primaryData;
		return newState;

	}
	return state;
}
