const stateDefault={
	progressValue:
}
export default (state=stateDefault,action)=>{
		if (action.type=="progress") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.progressValue=action.progressValue;
		return newState;

	}
	return state;
}