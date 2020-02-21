import React from 'react'
import './style.css'
import Header from '../../component/header/index.jsx'

import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import FlipPage from '../../component/flipPage/index.jsx'


class University extends React.Component{
	render(){
		var list=[];
		var cato=[];
		// console.log(this.props.uniData)
		if (this.props.uniData.title) {
			cato=this.props.uniData.catogory.map(item=>{
										return <div className="uni_downCatCont">{item}</div>
									});
			list=this.props.uniData.content.map(item=>{
										return(
												<div className="uni_downContItem">
													<div className="uni_downContItemImg" style={{
														background:"url("+item.imgURL+")",
														backgroundSize:"100% 100%"
														}}></div>
													<div className="uni_downContItemMain">
														<div className="uni_downContItemTitle">{item.title}</div>
														<div className="uni_downContItemCont">
															{item.content}
														</div>
													</div>
									
												</div>
											);
									})
		
				
			
		}else{
			list=null;cato=null;
		}
		return(
			<div className="university">
				
					<Header />
					<div className="uni_center">
						<div className="uni_image" style={{
							background:"url("+this.props.uniData.img+")",
							backgroundSize:"100% 100%"
							}}>

						</div>
						<div className="uni_down">
							<div className="uni_downCat">
								<div className="uni_downCatTitle">{this.props.uniData.title}</div>
								{
									cato
								}
							</div>
							<div className="uni_downCont">
								{
									list
								}
								
							</div>
						</div>
						
					</div>
					
			
					
			</div>
			  );
	}

componentDidMount(){
	this.props.getUni(this.props.match.params.type);
	
}
	
}

const mapStateToProps=(state)=>{
	return{
	uniData:state.UniversityReducer.universityData
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		getUni(lesson){
			dispatch(actionCreators.getUni(lesson))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(University)