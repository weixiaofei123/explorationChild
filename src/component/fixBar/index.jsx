import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'





class FixBar extends React.Component{
	constructor(){
		super();
		this.state={
			barOccur:false
		}
	}
	



	render(){
		return(<div className="fixBar">
					<div className="fixBarTop" >
						<img src={require("../../static/images/leaf.png")} alt="" className="fixBarImg"/>
							<div className="scanbar" style={{
											background:"url("+require("../../static/images/e1.jpg")+")",
											backgroundSize:"100% 100%"
							}}>
							</div>
			  		</div>
						
					<div className={this.state.barOccur?"barOccur":"fixBarDown"} onClick={()=>{this.handelClickUp()}}>up</div>

				</div>
					
			  );
	}


	handelClickUp(){
		clearInterval(timer)
		var timer=setInterval(function(){
			document.documentElement.scrollTop-=200;
			if (document.documentElement.scrollTop<=0) {
				clearInterval(timer)
			}
		},300)
	}


	componentDidMount(){
		var _this=this;
		window.addEventListener("scroll",function(){_this.scrollBar(_this)},false)
	}

	scrollBar(that){
		if (document.documentElement.scrollTop>520) {
			that.setState({
				barOccur:true
			})
		}else{
			that.setState({
				barOccur:false
			})
		}
	}


}

const mapStateToProps=(state)=>{
	return{
	loginState:state.LoginReducer.loginReturn,
	loginName:state.LoginReducer.loginName,
	
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		logout(){
			dispatch(actionCreators.logout())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(FixBar)




// <div className="primary_down1">
								// 	<ul>
								// 		<li><Link to="/uni/biology">biology</Link></li>
								// 		<li><Link to="/uni/chemistry">chemistry</Link></li>
										
								// 	</ul>
								// </div>



//<div id="fixBar_logo" style={{
//background:"url(../images/decoration.jpg)",
//backgroundSize:"100% 100%"
//}}>
	
//</div>