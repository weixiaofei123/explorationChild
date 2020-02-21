const stateDefault={
	mostPop:[]
}
export default (state=stateDefault,action)=>{
	
		if (action.type=="mostPop") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.mostPop=action.mostPop;
		return newState;

	}


		
	return state;
}