const stateDefault={
	highschoolData:[]
}
export default (state=stateDefault,action)=>{
	if (action.type=="highschoolData") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.highschoolData=action.highschoolData;
		return newState;

	}
	return state;
}
