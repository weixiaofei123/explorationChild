const stateDefault={
	loginReturn:false,
	loginName:""

}


export default (state=stateDefault,action)=>{
	if (action.type=="loginReturn") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.loginReturn=action.loginReturn;
		newState.loginName=action.loginName;
		return newState;
	}

	if (action.type=="autoLogin") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.loginReturn=action.autoLogin;
		
		return newState;
	}



	if (action.type=="logout") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.loginReturn=false;
		return newState;

	}
	return state;
}


