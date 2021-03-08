const stateDefault={
	bgc:false,
		bgc2:false,
	
		page:1

}
export default (state=stateDefault,action)=>{
		if (action.type=="changeFiHigh") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.bgc=action.bgc;
		newState.bgc2=action.bgc2;
		
		newState.page=action.page;
		return newState;

	}
		if (action.type=="changeSeHigh") {
		const newState=JSON.parse(JSON.stringify(state));
			newState.bgc=action.bgc;
		newState.bgc2=action.bgc2;
		
		newState.page=action.page;
		return newState;

	}

	if (action.type=="setPage") {
		const newState=JSON.parse(JSON.stringify(state));
		if (action.page==1) {
			newState.bgc=1;
		newState.bgc2=0;
		}else{
			newState.bgc=0;
		newState.bgc2=1;
		}
		newState.page=action.page;
		return newState;

	}
	
		
		
		
	return state;
}