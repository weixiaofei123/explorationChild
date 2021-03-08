import React from 'react'
import './style.css'
import Header from '../../component/header/index.jsx'

import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import FlipPage from '../../component/flipPage/index.jsx'


class Secondary extends React.Component{
	render(){
		var _this=this;
		var list=[];
		// console.log(this.props.secData)
		if (_this.props.secData.length>0) {
			
			for (var i =(_this.props.page-1)*6 ; i<_this.props.page*6; i++) {
				
				var item=<div  className="sec_item" data-k={i+1} onClick={(e)=>{ _this.handelDetail(e)}}>
							<div className="sec_itemImg" style={{
								background:"url("+_this.props.secData[i].imgURL+") no-repeat center center",
								backgroundSize:"contain"
								}}></div>
							<div className="sec_itemTitle">{this.props.secData[i].title}</div>
							<div className="sec_itemContent">{_this.props.secData[i].content}</div>
							<div className="sec_itemMore">More</div>
						</div>;
			
				list.push(item);
			}
				
			
		}else{
			list=null;
		}
		return(
			<div className="secondary">
				
					<Header history={this.props.history}/>
					<div className="sec_center">
						{
							list
						}
						<FlipPage />
					</div>
					
			
					
			</div>
			  );
	}

componentDidMount(){
	// console.log(this.props.match.params.lesson)
	this.props.getSec(this.props.match.params.lesson);
}


componentWillReceiveProps(nextProps){
	if (this.props.match.params.lesson!=nextProps.match.params.lesson) {
		this.props.getSec(nextProps.match.params.lesson);
	}
}
handelDetail(e){
	var id;
	if (e.target.className=="sec_item") {
		id=e.target.getAttribute("data-k");
		// console.log(id)
	}else{
		id=e.target.parentElement.getAttribute("data-k");
	}
	
	

	var table=this.props.match.params.lesson;
	console.log(table,id)
	

	this.props.history.push(`/detail/secondary/${table}/${id}`);
}
	
}

const mapStateToProps=(state)=>{
	return{
	secData:state.SecondaryReducer.secondaryData,
	page:state.FlipPageReducer.page
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		getSec(lesson){
			dispatch(actionCreators.getSec(lesson))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Secondary)