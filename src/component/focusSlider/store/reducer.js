const stateDefault={
	focus:[]
}
export default (state=stateDefault,action)=>{
		if (action.type=="focus") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.focus=action.focus;
		return newState;

	}
	return state;
}