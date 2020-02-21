const stateDefault={
	showViewData:[],
	SliderState:false,
	refs4:{},
	loginout:false,
	monData:false,
	seasonData:false,
	yearData:false,
	loginPop:false
}
export default (state=stateDefault,action)=>{
		if (action.type=="changeShowView") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.showViewData=action.showViewData;
		return newState;

	}
		if (action.type=="changeSlider") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.SliderState=action.SliderState;
		return newState;

	}
		if (action.type=="hideSlider") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.SliderState=action.SliderState;
		return newState;

	}

		if (action.type=="getmon") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.monData=action.monData;
		newState.seasonData=false;
		newState.yearData=false;
		return newState;

	}

	if (action.type=="getseason") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.seasonData=action.seasonData;
		newState.monData=false;
		newState.yearData=false;
		return newState;

	}

		if (action.type=="getyear") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.yearData=action.yearData;
		newState.seasonData=false;
		newState.monData=false;
		return newState;

	}

	if (action.type=="login") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.loginPop=action.loginPop;
		return newState;

	}

		if (action.type=="afterLogin") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.loginPop=action.loginPop;
		return newState;

	}

		
	return state;
}