import React from 'react'
import './index.css'
import Header from '../../component/header/index.jsx'
import Slider from '../../component/slider/index.jsx'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import Show from '../../component/show/index.js'
import CenterShow from '../../component/centerShow/index.js'
import Leaf from "../../component/leaf/index.jsx"
import Focus from "../../component/focusSlider/index.js"
import Search from '../../component/search/index.js'
import MostPop from '../../component/mostPop/index.jsx'
import ShowMiddle from '../../component/showMiddle/index.jsx'
import FixBar from '../../component/fixBar/index.jsx'



class Home extends React.Component{

	constructor(){
		super();
		
	}


	render(){
		var arrayLeft;
		
	// 	console.log(this.props.leftViewData)
	if (this.props.leftViewData) {
		 arrayLeft=this.props.leftViewData.map(item=>{
									return(
											<div onClick={()=>{this.handelLeftClick(item.id)}} className="leftView_item">
												<div className="leftView_itemTitle">{item.title}</div>
												<div  className="leftView_itemContent">{item.content}</div>
											</div>
										);
								})
							}else{
								 arrayLeft="loading";
							}
		

		return(<div className="home" >

					<Search history={this.props.history} />
					
					<Focus />
					<Header history={this.props.history}/>
					<MostPop />
					<div className="center">
						<Slider history={this.props.history} className="center_slider"/>
						<div className="leftView">
							{
								arrayLeft
							}
						</div>
						<Show history={this.props.history}/>
						<ShowMiddle />
						<CenterShow history={this.props.history}/>
					</div>
					<Leaf />
					<FixBar />
					
			  </div>
			  );
	}

	componentDidMount(){
		this.props.leftView();
		this.props.autoLogin();
	
	}

	

	handelLeftClick(no){
		this.props.history.push(`/detail/homepage/leftView/${no}`);
	}
}

const mapStateToProps=(state)=>{
	return{
	leftViewData:state.HomeReducer.leftViewData
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		leftView(){
			dispatch(actionCreators.getLeftData())
		},
		autoLogin(){
			dispatch(actionCreators.autoLogin())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)