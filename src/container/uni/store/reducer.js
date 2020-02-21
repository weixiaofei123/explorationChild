const stateDefault={
	res:[]
}

export default (state=stateDefault,action)=>{
		if (action.type=="res") {
			const newState=JSON.parse(JSON.stringify(state)) ;
			newState.res=action.res;
			return newState;
		}

		return state;
}