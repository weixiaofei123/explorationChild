import React from 'react'
import './style.css'
import Header from '../../component/header/index.jsx'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'



class Register extends React.Component{
	render(){
		
		return(
			<div className="register">
				<Header />
				<div className="reg_info">
					<div className="reg_infoTitle">我要注册</div>
					<div className="reg_infoUser">
						<span>*用户名:</span><input ref="userName" type="text" onKeyUp={(e)=>{this.props.handleUser(e)}}/>
						{
							this.props.user?<div className="reg_infoUserExist">用户名已经存在</div>:null
						}
					</div>
					<div className="reg_infoPassword">
						<span>*密码:</span><input type="text" ref="passWord" onKeyUp={(e)=>{this.props.handlePassword(e)}}/>
						{

						this.props.passWordResult?null:<div className="reg_infoUserPass">需要字母、数字、特殊符号</div>
						
						}
					</div>
					<div className="reg_infoPasswordVerify">
						<span>*确认密码:</span><input type="text" ref="confirmPassword" onKeyUp={(e)=>{this.props.handlePasswordReEnter(e,this.refs.passWord.value)}}/>
						{

						this.props.samePassword?null:<div className="reg_infoUserSamePass">密码不一致</div>
						
						}
					</div>
			
					<div id="registerBtn"onClick={()=>{this.props.handleRegister(this.refs.userName.value,this.refs.passWord.value,this.refs.confirmPassword.value)}}>立即注册</div>
				</div>
			</div>
			  );
	}


componentDidMount(){

}

componentDidUpdate(){
	if (this.props.registerR) {
		this.props.history.push("/login");
	}
}

}


const mapStateToProps=(state)=>{
	return{
	user:state.RegisterReducer.userExist,
	passWordResult:state.RegisterReducer.passWordR,
	samePassword:state.RegisterReducer.samePassword,
	phone:state.RegisterReducer.phone,
	verification:state.RegisterReducer.verification,
	registerR:state.RegisterReducer.registerReturn
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		handleUser(e){
		
		dispatch(actionCreators.handleUser(e.target.value))
		},
		handlePassword(e){
		
		var partern=RegExp("^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[\\~\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\[\\]\\{\\}\\<\\>\\?\\\\\\+])[a-zA-Z0-9\\~\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\[\\]\\{\\}\\<\\>\\?\\\\\\+]{8,20}$");
		var passWord=e.target.value;
		var result=partern.test(passWord);
		
		dispatch(actionCreators.passWord(result))
		},
		handlePasswordReEnter(e,passWord){
			var passWordSame;
			if (e.target.value==passWord) {
				passWordSame=true;
			}else{
				passWordSame=false;
			}
			dispatch(actionCreators.reEnterPassword(passWordSame))
		},
		handlePhone(e){
		var partern=RegExp("^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$");
		var phone=e.target.value;
		var result=partern.test(phone);
		
		dispatch(actionCreators.phone(result))
		},
		handleVerify(e,phone,phoneNo){
			var code=true;
			dispatch(actionCreators.verification(code,phoneNo))
			var oinput=e.target;
			// e.target.value="重发 60"
			e.target.disabled="disabled";
			e.target.style.color="#fff"
			var t=60;
			oinput.value="重发"+t+"s";
			var timer=setInterval(function(){
				oinput.value="重发"+t+"s";
				t--;
				if (t==0) {
					clearInterval(timer);
					oinput.value="验证码";
					oinput.removeAttribute("disabled")
				}

			},1000)

		},
		handleRegister(userName,passWord,confirmPassword,phoneNo,verification){
			console.log("here")
			dispatch(actionCreators.register(userName,passWord,confirmPassword))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)


		// <div className="reg_infoIphone">
					// 	<span>*手机号码:</span><input type="text" ref="phoneNo" onKeyUp={(e)=>{this.props.handlePhone(e)}}/>
					// 	{

					// 	this.props.phone?null:<div className="reg_infoUserPhone">请输入正确手机号码</div>
						
					// 	}
					// </div>
					// <div className="reg_infoIphoneVerify">

					// 	<span>*短信验证码:</span><input type="text" id="verify" ref="verification"/>
					// 	{

					// 	<input id="verification" type="button" onClick={(e)=>{this.props.handleVerify(e,this.props.phone,this.refs.phoneNo.value)}} value="验证码" />
						
					// 	}
						
					// </div>