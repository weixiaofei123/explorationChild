import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'



class Header extends React.Component{
	render(){
		var _this=this;
		return(<div className="header">
					<div className="header_center">
						<Link to="/">
							<div className="header_logo" style={{
								
								backgroundSize:"100% 100%"
								}}>
	
							</div>
						</Link>
						<div className="header_title">
						
							<div className="primary" id="home" onClick={()=>{this.handelHomeClick()}}>
								Home
							</div>
							
							<div className="primary">primary
								<div className="primary_down1">
									<ul onClick={(e)=>{_this.handlePrimary(e)}}>
										<li className="k0">k0</li>
										<li className="k1">k1</li>
										<li className="k2">k2</li>
										<li className="k3">k3</li>
										<li className="k4">k4</li>
										<li className="k5">k5</li>
									</ul>
								</div>
							</div>
							<div className="primary">secondary
								<div className="primary_down1">
									<ul>
										<li><Link to="/secondary/sec_history">history</Link></li>
										<li><Link to="/secondary/sec_science">science</Link></li>
										<li><Link to="/secondary/sec_medicine">medicine</Link></li>
									</ul>
								</div>
							</div>
							<div className="primary">highschool
								<div className="primary_down1">
									<ul>
										<li><Link to="/highschool/high_biology">biology</Link></li>
										<li><Link to="/highschool/high_chemistry">chemistry</Link></li>
										
									</ul>
								</div>
							</div>
							<div id="personnel">
								<Link to="/register"><span className="personnel_reg">register</span></Link>
								{
									this.props.loginState?<span className="personnel_log" onClick={()=>{this.logout()}}>logout</span>:
									<Link to="/login"><span className="personnel_log">login</span></Link>
								}
								
							</div>
							
						
							
						
						</div>
					</div>
			  </div>
			  );
	}


		logout(){
			this.props.logout();
			this.props.history.push("/login");
			
		}
		handlePrimary(e){
			// console.log("here")
			var oPrimary=e.target.className;
			// console.log(this.props.history)
			
				switch (oPrimary){
					case "k0":this.props.history.push("/primary/k0");break;
					case "k1":this.props.history.push("/primary/k1");break;
					case "k2":this.props.history.push("/primary/k2");break;
					case "k3":this.props.history.push("/primary/k3");break;
					case "k4":this.props.history.push("/primary/k4");break;
					case "k5":this.props.history.push("/primary/k5");break;
					}
				
			

		}


		handelHomeClick(){
			this.props.history.push("/");
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
export default connect(mapStateToProps,mapDispatchToProps)(Header)




// <div className="primary_down1">
								// 	<ul>
								// 		<li><Link to="/uni/biology">biology</Link></li>
								// 		<li><Link to="/uni/chemistry">chemistry</Link></li>
										
								// 	</ul>
								// </div>



//<div id="header_logo" style={{
//background:"url(../images/decoration.jpg)",
//backgroundSize:"100% 100%"
//}}>
	
//</div>