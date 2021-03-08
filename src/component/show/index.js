import React from 'react'
import './style.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'

class Show extends React.Component{
	render(){
		var arrayShow;
		
		
	if (this.props.showViewData.length>1) {
		 arrayShow=this.props.showViewData.map(item=>{
									return(
											<div onClick={()=>{this.handelShowClick(item.id)}} className="showView_item">
												<div className="showView_itemImg" style={{
													background:"url("+item.imgURL+")",
													backgroundSize:"100% 100%"
												}}></div>
												<div  className="showView_itemTitle">{item.title}</div>
											</div>
										);
								})
							}else{
								 arrayShow="loading";
							}
				return(
					<div className="show">
					
						<div className="show_title">
							exploration
						</div>
						<div className="show_frame" ref="showFrame" onMouseOver={(e)=>{this.props.showSlider(e,this.refs.slider,this.refs.content,this.refs.showFrame)}} onMouseOut={()=>{this.props.hideSlider()}}>
							<div className="show_slider" >
								{
									this.props.SliderState?<div className="show_sliderIn" ref="slider"></div>:<div className="show_sliderOut" ref="slider"></div>
								}
							</div>
							<div className="show_content" ref="content" >
								{
									arrayShow
								}
								
							</div>

						</div>
					
			  </div>
			  );
	}

	componentDidMount(){
		this.props.show();

	}

	handelShowClick(no){
		this.props.history.push(`/detail/homepage/show1/${no}`);
	}
}

const mapStateToProps=(state)=>{
	return{
	showViewData:state.ShowReducer.showViewData,
	SliderState:state.ShowReducer.SliderState
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		show(){
			dispatch(actionCreators.getShowData())
		},
		showSlider(e,slider,content,showFrame){
			
			dispatch(actionCreators.displaySlider());

			var odiv=e.target;
			odiv.onwheel=function(e){
				 e.preventDefault();
				var direction=e.wheelDelta;
				
				if (direction>0&&slider.offsetLeft<(showFrame.offsetWidth-slider.offsetWidth)) {
					
					slider.style.left=slider.offsetLeft+50+"px";
					content.style.left=content.offsetLeft-50+"px";
				}else if(direction<0&&slider.offsetLeft>0){
					slider.style.left=slider.offsetLeft-50+"px";
					content.style.left=content.offsetLeft+50+"px";
				}
			}

			
		},
		hideSlider(){
			
			dispatch(actionCreators.hideSlider())
		}

		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Show)