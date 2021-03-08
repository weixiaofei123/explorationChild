const stateDefault={
	leftViewData:[1]
}
export default (state=stateDefault,action)=>{
	if (action.type=="changeLeftView") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.leftViewData=action.leftViewData;
		return newState;

	}
	return state;
}