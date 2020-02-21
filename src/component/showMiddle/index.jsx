import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'




class ShowMiddle extends React.Component{

	constructor(){
		super()
		this.state={
			moveB:false
		}
	}

	render(){
		return(<div className="showMiddle">
					<div className={this.state.moveB?"showMiddle_left":"showMiddle_left displayNone"} onClick={()=>{this.handelClickF()}}>
						(-
					</div>
					<div className="showMiddle_middle">
						<ul className={this.state.moveB?"origin move":"origin"}>
							<li>
								<div style={{
									background:"url("+require("../../static/images/1.jpg")+")",
									backgroundSize:"100% 100%"
								}}></div>
								<div className="showMiddle_middle_top">welcome</div>
								<div id="sunShine"></div>
								<div className="showMiddle_middle_down">funy story</div>
							</li>
							<li>
								<div style={{
									background:"url("+require("../../static/images/e1.jpg")+")",
									backgroundSize:"100% 100%"
								}}></div>
							</li>
							<li>
								<div style={{
									background:"url("+require("../../static/images/e2.jpg")+")",
									backgroundSize:"100% 100%"
								}}></div>
							</li>
							<li>
								<div style={{
									background:"url("+require("../../static/images/e3.jpg")+")",
									backgroundSize:"100% 100%"
								}}></div>
							</li>
							<li>
								<div style={{
									background:"url("+require("../../static/images/12.jpg")+")",
									backgroundSize:"100% 100%"
								}}></div>
							</li>
						</ul>	
					</div>

					<div className={this.state.moveB?"showMiddle_right displayNone":"showMiddle_right"} 
						onClick={()=>{this.handelClickB()}}>
						-)
					</div>
				</div>);
			  };


	handelClickB(){

	this.setState({
		moveB:true
	})

	}

	handelClickF(){
		this.setState({
		moveB:false
	})
	}

	}


		

const mapStateToProps=(state)=>{
	return{
	
	
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowMiddle)




// <div className="primary_down1">
// 	<ul>
// 		<li><Link to="/uni/biology">biology</Link></li>
// 		<li><Link to="/uni/chemistry">chemistry</Link></li>
		
// 	</ul>
// </div>



//<div id="showmiddle_logo" style={{
//background:"url(../images/decoration.jpg)",
//backgroundSize:"100% 100%"
//}}>
	
//</div>