import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'
import Login from '../../container/login/index.jsx'

class Vip extends React.Component{
	render(){
		
		return(
			<div>
				<div className="vipShade"></div>
				<div className="vip">
						{
							this.props.loginPop?<Login className="vipLLogin" />:null
						}
						<div className="vipLogin">
							<div className="vipLoginRight">
								{
									this.props.loginReturn?
									<div className="vipLoginRightState">
										<span>{this.props.loginName}</span>
										
									</div>:
									<div className="vipLoginRightState">
										<span>你还没有登录</span>
										<span className="vipLoginRightButton" onClick={()=>{this.props.handelLogin()}}>立即登录</span>
									</div>
								}
								
								<span className="vipLoginRightClosed" onClick={()=>{this.props.closed()}}>X</span>
							</div>
							
						</div>
						<div className="vipName">vip 会员</div>
						<div className="vipSet">套餐选择</div>
						<div className="vipType">
							
							<div className="vipTypeMonth" ref="month" onClick={(e)=>{this.props.handelMon(e,this.refs.season,this.refs.year)}}>
								月季费16
							</div>
							<div className="vipTypeSeason" ref="season" onClick={(e)=>{this.props.handelSeason(e,this.refs.month,this.refs.year)}}>
								季费26
							</div>
							<div className="vipTypeYear" ref="year" onClick={(e)=>{this.props.handelYear(e,this.refs.month,this.refs.season)}}>
								年费36
							</div>
						</div>
						<div className="payMethod">支付方式</div>
						{
							this.props.monData?
								<div className="vipPay">
								<div className="vipPayScan" style={{
									background:"url("+require("../../static/images/12.jpg")+")",
									backgroundSize:"100% 100%"
								}}>
									
								</div>
								<div className="vipPayPrice">
									月费是16
								</div>
							</div>:null
						}
						{
							this.props.seasonData?
								<div className="vipPay">
								<div className="vipPayScan" style={{
									background:"url("+require("../../static/images/12.jpg")+")",
									backgroundSize:"100% 100%"
								}}>
									
								</div>
								<div className="vipPayPrice">
									季费是26
								</div>
							</div>:null
						}
						{
							this.props.yearData?
								<div className="vipPay">
								<div className="vipPayScan" style={{
									background:"url("+require("../../static/images/12.jpg")+")",
									backgroundSize:"100% 100%"
								}}>
									
								</div>
								<div className="vipPayPrice">
									年费是36
								</div>
							</div>:null
						}
						
			  	</div>
			</div>
				
				
				
			  );
	}


}

const mapStateToProps=(state)=>{
	return{
	monData:state.VipReducer.monData,
	seasonData:state.VipReducer.seasonData,
	yearData:state.VipReducer.yearData,
	loginPop:state.VipReducer.loginPop,
	loginReturn:state.LoginReducer.loginReturn,
	loginName:state.LoginReducer.loginName,
	
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		closed(){
			dispatch(actionCreators.closed())
		},
		handelMon(e,t,r){
			e.target.style.backgroundColor="#edd797";
			t.style.backgroundColor="#fff";
			r.style.backgroundColor="#fff";
			dispatch(actionCreators.getMon())

		},
		handelSeason(e,t,r){
			e.target.style.backgroundColor="#edd797";
			t.style.backgroundColor="#fff";
			r.style.backgroundColor="#fff";
			dispatch(actionCreators.getSeason())

		},
		handelYear(e,t,r){
			e.target.style.backgroundColor="#edd797";
			t.style.backgroundColor="#fff";
			r.style.backgroundColor="#fff";
			dispatch(actionCreators.getYear())

		},
		handelLogin(){
			dispatch(actionCreators.login())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Vip)