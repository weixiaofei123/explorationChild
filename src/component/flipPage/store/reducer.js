const stateDefault={
	bgc:false,
		bgc2:false,
		bgc3:false,
		bgc4:false,
		bgc5:false,
		page:1

}
export default (state=stateDefault,action)=>{
		if (action.type=="changeFi") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.bgc=action.bgc;
		newState.bgc2=action.bgc2;
		newState.bgc3=action.bgc3;
		newState.bgc4=action.bgc4;
		newState.bgc5=action.bgc5;
		newState.page=action.page;
		return newState;

	}
		if (action.type=="changeSe") {
		const newState=JSON.parse(JSON.stringify(state));
			newState.bgc=action.bgc;
		newState.bgc2=action.bgc2;
		newState.bgc3=action.bgc3;
		newState.bgc4=action.bgc4;
		newState.bgc5=action.bgc5;
		newState.page=action.page;
		return newState;

	}
	
			if (action.type=="changeTh") {
		const newState=JSON.parse(JSON.stringify(state));
			newState.bgc=action.bgc;
		newState.bgc2=action.bgc2;
		newState.bgc3=action.bgc3;
		newState.bgc4=action.bgc4;
		newState.bgc5=action.bgc5;
	newState.page=action.page;
		return newState;

	}
			if (action.type=="changeFo") {
		const newState=JSON.parse(JSON.stringify(state));
			newState.bgc=action.bgc;
		newState.bgc2=action.bgc2;
		newState.bgc3=action.bgc3;
		newState.bgc4=action.bgc4;
		newState.bgc5=action.bgc5;
	newState.page=action.page;
		return newState;

	}

				if (action.type=="changeFf") {
		const newState=JSON.parse(JSON.stringify(state));
			newState.bgc=action.bgc;
		newState.bgc2=action.bgc2;
		newState.bgc3=action.bgc3;
		newState.bgc4=action.bgc4;
		newState.bgc5=action.bgc5;
	newState.page=action.page;
		return newState;

	}
		
		
	return state;
}