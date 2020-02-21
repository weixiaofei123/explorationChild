const stateDefault={
	search:[]
}
export default (state=stateDefault,action)=>{
	if (action.type=="search") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.search=action.search;
		return newState;

	}
	return state;
}