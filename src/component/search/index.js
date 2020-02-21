import React from 'react'
import './style.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import Clock from '../clock/index.jsx'





class Search extends React.Component{


	constructor(){
		super()
		this.state={
			count:0,
			value:"",
			searchFloat:false
		}
	}

changeEvent(e){
        console.log(e.target.value);
		this.setState({
			value:e.target.value
		})
    }

handelClickLogo(){
	this.props.history.push("");
}

	render(){
		
		return(
				<div className={this.state.searchFloat?"searchFloat":"search"} style={{
						background:"url("+require("../../static/images/1.jpg")+")",
						backgroundSize: "100% 100%"
						}}>
					<div className="header_logo" style={{
								background:"url("+require('../../static/images/logo.png')+")",
								backgroundSize:"100% 100%"
								}}
						onClick={()=>{this.handelClickLogo()}}
								>
	
					</div>
					<div className="search_Frame" >
						<input type="text"  className="search_F_Text" ref="search_F_Text" 
						value={this.state.value} onChange={(e)=>{this.changeEvent(e)}}
						/><span 
						
						onClick={()=>{this.handelSearch(this.refs.search_F_Text.value)}}
						className="search_F_Button">search</span>
						
					</div>
					<Clock />
					
				</div>
			);
	}
		
	handelSearch(value){
		if (value!="") {
			this.props.history.push(`/searchPage/${value}`)
		}
	}

	handelChange(){
		
	}

	handelMOutsearch(){
		
	}

	componentDidMount(){

		var _this=this;
		// window.onscroll=function(){

		// 	console.log(document.documentElement.scrollTop)
		// 	if (document.documentElement.scrollTop>=520) {
		// 		_this.setState({
		// 			searchFloat:true
		// 		})
		// 	}else{
		// 		_this.setState({
		// 			searchFloat:false
		// 		})
		// 	}
			
		// }


		window.addEventListener("scroll",function(){_this.handelScroll(_this)},false)
		// console.log(this)
		
	}

	handelScroll(that){
		// console.log(document.documentElement.scrollTop)
		// console.log(that)
		if (document.documentElement.scrollTop>=520) {
			that.setState({
				searchFloat:true
			})
		}else{
			that.setState({
				searchFloat:false
			})
		}
	}


	componentDidUpdate(){
		
	}


	conmponentWillUnmount(){
		window.removeEventListener("scroll",function(){this.handelScroll(this)},false)
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


export default connect(mapStateToProps,mapDispatchToProps)(Search)