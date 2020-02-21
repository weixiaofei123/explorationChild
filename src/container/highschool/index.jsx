import React from 'react'
import './style.css'
import Header from '../../component/header/index.jsx'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import HighFlipPage from '../../component/highFlipPage/index.jsx'


class Highschool extends React.Component{
	render(){
		var list=[];
		var cato=[];
		// console.log(this.props.highData)
		if (this.props.highData.length) {
			console.log("here")
			// cato=this.props.highData.catogory.map(item=>{
			// 							return <div className="high_downCatCont">{item}</div>
			// 						});
			for (var i=(this.props.highPage-1)*3;i<3*(this.props.highPage);i++) {
				var item=<div className="high_downContItem" data-k={i+1} onClick={(e)=>{
								this.handelHighDetail(e)
							}}>
							<div className="high_downContItemImg" data-k={i+1} style={{
								background:"url("+this.props.highData[i].imgURL+") no-repeat",
								backgroundSize:"cover"
								}}></div>
							<div className="high_downContItemMain" data-k={i+1}>
								<div className="high_downContItemTitle" data-k={i+1}>{this.props.highData[i].title}</div>
								<div className="high_downContItemCont" data-k={i+1}>
									{this.props.highData[i].content}
								</div>
							</div>
			
						</div>;
				list.push(item);
			}

			var imgMiddle=<div className="high_image" style={{
							background:"url("+this.props.highData[6].imgURL+") no-repeat",
							backgroundSize:"cover"
							}}>

						</div>;


			// list=this.props.highData.map(item=>{
			// 							return(
			// 									<div className="high_downContItem">
			// 										<div className="high_downContItemImg" style={{
			// 											background:"url("+item.imgURL+")",
			// 											backgroundSize:"100% 100%"
			// 											}}></div>
			// 										<div className="high_downContItemMain">
			// 											<div className="high_downContItemTitle">{item.title}</div>
			// 											<div className="high_downContItemCont">
			// 												{item.content}
			// 											</div>
			// 										</div>
									
			// 									</div>
			// 								);
			// 						})
		
				
			
		}else{
			list=null;
			// cato=null;
		}

		return(
			<div className="highschool">
				
					<Header history={this.props.history}/>
					<div className="high_center">
						{
							imgMiddle
						}
						<div className="high_down">
							<div className="high_downCat">
								<div className="high_downCatTitle">{this.props.match.params.type=="high_biology"?"biology":"chemistry"
								}</div>
								<div className={this.props.highPage==1?"high_downCatCont_red":"high_downCatCont"}
								onClick={()=>{this.props.setPage(1)}}
								>{"basic concept"}</div>
									<div className={this.props.highPage==2?"high_downCatCont_red":"high_downCatCont"}
									onClick={()=>{this.props.setPage(2)}}
								>{this.props.match.params.type=="high_biology"?"hydrogen bonds":"Dalton atomic"}</div>
							
							</div>
							<div className="high_downCont">
								{
									list
								}
								
							</div>
						</div>
						
					</div>
					<HighFlipPage />
			
					
			</div>
			  );
	}

componentDidMount(){

	this.props.gethigh(this.props.match.params.type);
	
}


componentWillReceiveProps(nextProps){
	if (this.props.match.params!=nextProps.match.params) {
		this.props.gethigh(nextProps.match.params.type);
	}
}


handelHighDetail(e){
	var id;
	
		id=e.target.getAttribute("data-k");
		// console.log(id)
	
	
	this.props.history.push(`/detail/highschool/${this.props.match.params.type}/${id}`)
}
	
}

const mapStateToProps=(state)=>{
	return{
	highData:state.HighschoolReducer.highschoolData,
	highPage:state.HighFlipPageReducer.page
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		gethigh(lesson){

			dispatch(actionCreators.gethigh(lesson))

		},
		setPage(page){
		dispatch(actionCreators.setPage(page))
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Highschool)