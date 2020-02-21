import React from 'react'
import './style.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import Header from '../../component/header/index.jsx'



class Login extends React.Component{
	render(){
		
		return(
			<div className="login">
				<Header />
				<div className="login_info">
					<div className="login_infoTitle">我要登录</div>
					<div className="login_infoUser">
						<span>*用户名:</span><input ref="userName" type="text" />
						
					</div>
					<div className="login_infoPassword">
						<span>*密码:</span><input type="text" ref="passWord" />
						
					</div>
					<div id="login_infoPro">
						<input id="login_infoProChe" type="checkbox" /><span>记住我</span><span className="login_infoProR">登录遇到问题</span>
					</div>
					<div id="loginButton" onClick={()=>{this.props.handleLogin(this.refs.userName.value,this.refs.passWord.value)}}>登录</div>
				</div>
			</div>
			);
	}


componentDidMount(){

}



componentWillReceiveProps(){
	
}

componentDidUpdate(){
	if (this.props.loginState) {
		this.props.history.go(-1);
	}
	
	
}

}

const mapStateToProps=(state)=>{
	return{
	loginState:state.LoginReducer.loginReturn,


	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		handleLogin(userName,passWord){
			dispatch(actionCreators.login(userName,passWord))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)