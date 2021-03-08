const stateDefault={
	showViewData:[],
	SliderState:false,
	refs4:{},
	loginout:false
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


		
	return state;
}