import React from 'react'
import './style.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import More from '../../component/more/index.js'

class CenterShow extends React.Component{
	render(){
		var arrayCenterShow;
	
	if (this.props.CenterShowViewData) {
		 arrayCenterShow=this.props.CenterShowViewData.map(item=>{
									return(
											<div onClick={()=>{this.handelCenterClick(item.id)}} className="CenterShowView_item">
												<div className="CenterShowView_itemImg" style={{
													background:"url("+item.imgURL+")",
													backgroundSize:"100% 100%"
												    }}></div>
												<div className="CenterShowView_word">
													<div  className="CenterShowView_itemTitle">{item.title}</div>
													<div className="CenterShowView_itemContent">{item.content}</div>
												</div>
												
											</div>
										);
								})
							}else{
								 arrayCenterShow="loading";
							}
				return(
					<div className="CenterShow">
					
						<div className="CenterShow_title">
							kids love science
						</div>
								{
									arrayCenterShow
								}
						<More history={this.props.history}/>
						
					
			        </div>
			  );
	}

	componentDidMount(){
		this.props.CenterShow();

	}

	handelCenterClick(no){
		
		this.props.history.push(`/detail/homepage/centerShow/${no}`)
	}
}



const mapStateToProps=(state)=>{
	return{
	CenterShowViewData:state.CenterShowReducer.CenterShowViewData
	}
}



const mapDispatchToProps=(dispatch)=>{
	return{
		CenterShow(){
			dispatch(actionCreators.getCenterShowData())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CenterShow)