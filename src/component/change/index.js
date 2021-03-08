import React from 'react'
import './style.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'




class Change extends React.Component{
	constructor(){
		super()
		this.state={
			count:0,
			changeColor:false
		}
	}
	render(){
		
		return(
				<div className="change_center">
					<div className={this.state.changeColor?"changeM":"change"}
						onMouseOver={()=>{this.handelMOverchange()}}
						onMouseOut={()=>{this.handelMOutchange()}}
						onClick={()=>{this.handelClickchange()}}
					>
						change >
					</div>
				</div>
			);
	}
	
	handelMOverchange(){
		this.setState({
			changeColor:true
		})
	}

	handelMOutchange(){
		this.setState({
			changeColor:false
		})
	}

	handelClickchange(){
		this.props.history.push("/changepage/ee")
	}

	componentDidMount(){
	
		
	}

	componentDidUpdate(){
		
	}
	
}



const mapStateToProps=(state)=>{
	return{
	
	}
}



const mapDispatchToProps=(dispatch)=>{
	return{
		getData(){
			dispatch(actionCreators.getData())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Change)