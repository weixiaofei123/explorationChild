import React from 'react'
import './style.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'




class FocusSlider extends React.Component{
	constructor(){
		super()
		this.state={
			count:0
		}
	}
	render(){
		if (this.props.focusData.length>0) {
			
			var textList=new Array();
			var picList=new Array();
			this.props.focusData.map((item,index)=>{
				var colorN="#"+parseInt((Math.random()*4095)).toString(16);
				textList.push(<li 
								onMouseOver={()=>{this.handelMOFocus(item.id)}}
								onMouseOut={()=>{this.handelMOutFocus()}}
								>
								<span style={{
									display:"inline-block",
									backgroundColor:colorN,
									width:"20px",
									height:"20px",
									textAlign:"center",
									lineHeight:"20px"
									}}>{item.id}
								</span>
								<span className={index==this.state.count?"bigLi":"smallLi"}>{item.title}</span>
							</li>)

				
				picList.push(<li style={{background:"url("+item.imgURL+")",
					backgroundSize:"100% 100%"
			     }}></li>)
			})
				
				
			
		}else{
			var textList="";
			var picList="";
		}

		return(
				<div className="focus">
					
					<div className="focus_pic">
						<ul className="focus_pic_ul" 
						style={
							this.refs.focus_pic_ul?
							{
								left:-this.state.count*(this.refs.focus_pic_ul.offsetWidth/6)+"px",

							}:{}
						}
						id="focus_pic_ul" ref="focus_pic_ul">
							{
								picList
							}
						</ul>
					</div>
					
					<div className="focus_text">
						<ul className="focus_text_ul">
							{
								textList
							}
						</ul>
					</div>
				</div>
			);
	}
		
	handelMOFocus(id){
		this.setState({
			count:id-1
		})
		clearInterval(window.timer)
	}

	handelMOutFocus(){
		count=this.state.count;
	var _this=this;
	clearInterval(window.timer)
		timer=setInterval(
			function(){
				
				if (count==6) {
					count=0;
				}
				_this.setState({
					 count:count
				})
		
			count++;
			},2000
		)
	}

	componentDidMount(){
		this.props.getData();

		var _this=this;
	
	
		 window.count=this.state.count;
	 window.timer=setInterval(function(){
			
			if (count==6) {
				count=0;
			}
			_this.setState({
				 count:count
			})
		
		count++;
		},2000)
		
	}

	componentDidUpdate(){
		
	}
	
}



const mapStateToProps=(state)=>{
	return{
	focusData:state.FocusReducer.focus
	}
}



const mapDispatchToProps=(dispatch)=>{
	return{
		getData(){
			dispatch(actionCreators.getData())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(FocusSlider)