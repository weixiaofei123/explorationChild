const stateDefault={
	universityData:{},
	userExist:false,
	passWordR:true,
	samePassword:true,
	phone:true,
	verification:false,
	registerReturn:false

}
export default (state=stateDefault,action)=>{
	if (action.type=="universityData") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.universityData=action.universityData;
		return newState;

	}

		if (action.type=="userExist") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.userExist=action.userExist;
		return newState;

	}

		if (action.type=="passWordR") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.passWordR=action.passWordR;
		return newState;

	}

	if (action.type=="samePassword") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.samePassword=action.samePassword;
		return newState;

	}

	if (action.type=="phone") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.phone=action.phone;
		return newState;

	}

	if (action.type=="verification") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.verification=action.verification;
		return newState;

	}

		if (action.type=="registerReturn") {
		const newState=JSON.parse(JSON.stringify(state));
		newState.registerReturn=action.registerReturn;
		return newState;

	}
	return state;
}
