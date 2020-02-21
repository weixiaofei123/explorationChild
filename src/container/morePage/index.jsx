import React from 'react'
import './index.css'
import Header from '../../component/header/index.jsx'

import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import Search from '../../component/search/index.js'




class MorePage extends React.Component{
	render(){
		// console.log(this.props.more.length)
		if (this.props.more.length>0) {
			
			var list=new Array();
			this.props.more.map((item)=>{
			list.push(
				<li>
					<div className="moreData_pic" style={{
						background:"url("+item.imgURL+")",
						backgroundSize:"100% 100%"
						}}>
					</div>
					<div className="moreData_text">
						<div className="moreData_title">
							{
								item.title
							}
						</div>
						<div className="moreData_content">
							{
								item.content
							}
						</div>
					</div>
				</li>
				)
			})
		}else{
			var list=""
		}


		return(<div className="morePage">
					<Search value={this.props.match.params.value}/>
					<div className="morePage_wrap">
						<ul>
							{
								list
							}
						</ul>
					</div>
				
					
					
			  </div>
			  );
	}

	componentDidMount(){
		this.props.moreData();
	}

	
}

const mapStateToProps=(state)=>{
	return{
	more:state.MorePageReducer.more
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		moreData(data){
			// console.log("here")
			dispatch(actionCreators.moreData(data))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(MorePage)