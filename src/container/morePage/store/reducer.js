const stateDefault={
	more:[]
}
export default (state=stateDefault,action)=>{
	if (action.type=="more") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.more=action.more;
		return newState;

	}
	return state;
}