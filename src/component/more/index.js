import React from 'react'
import './style.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'




class More extends React.Component{
	constructor(){
		super()
		this.state={
			count:0,
			moreColor:false
		}
	}
	render(){
		
		return(
				<div className="more_center">
					<div className={this.state.moreColor?"moreM":"more"}
						onMouseOver={()=>{this.handelMOverMore()}}
						onMouseOut={()=>{this.handelMOutMore()}}
						onClick={()=>{this.handelClickMore()}}
					>
						more >
					</div>
				</div>
			);
	}
	
	handelMOverMore(){
		this.setState({
			moreColor:true
		})
	}

	handelMOutMore(){
		this.setState({
			moreColor:false
		})
	}

	handelClickMore(){
		this.props.history.push("/morepage")
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


export default connect(mapStateToProps,mapDispatchToProps)(More)