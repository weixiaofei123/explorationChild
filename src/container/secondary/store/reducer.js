const stateDefault={
	secondaryData:[]
}
export default (state=stateDefault,action)=>{
	if (action.type=="secondaryData") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.secondaryData=action.secondaryData;
		return newState;

	}
	return state;
}
