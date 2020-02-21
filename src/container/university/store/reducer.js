const stateDefault={
	universityData:{}
}
export default (state=stateDefault,action)=>{
	if (action.type=="universityData") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.universityData=action.universityData;
		return newState;

	}
	return state;
}
