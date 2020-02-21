import React from 'react'
import './index.css'
import Header from '../../component/header/index.jsx'

import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import Search from '../../component/search/index.js'




class SearchPage extends React.Component{
	render(){
		
		if (this.props.search.length>0) {
			console.log(this.props.search)
			var list=new Array();
			this.props.search.map((item)=>{
			list.push(
				<li>
					<div className="searchData_pic" style={{
						background:"url("+item.imgURL+")",
						backgroundSize:"100% 100%"
						}}>
					</div>
					<div className="searchData_text">
						<div className="searchData_title">
							{
								item.title
							}
						</div>
						<div className="searchData_content">
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


		return(<div className="searchPage">
					<Search value={this.props.match.params.value}/>
					<div className="searchPage_wrap">
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
		this.props.searchData(this.props.match.params.value);
	}

	
}

const mapStateToProps=(state)=>{
	return{
	search:state.SearchPageReducer.search
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		searchData(data){
			dispatch(actionCreators.searchData(data))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)