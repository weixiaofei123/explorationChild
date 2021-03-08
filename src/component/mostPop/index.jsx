import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'
import YouTube from 'react-youtube';




class MostPop extends React.Component{


constructor(){
		super();
		this.state={
			mouseOver:[false,false,false,false],
			mouseOverWord:[false,false,false,false],
			mouseWordXY:{}
		}
	}


	handelOverVideo(e,index){
	// console.log("here")
	var temArray=[false,false,false,false];
	for (var i = 0; i <4; i++) {
		if (i==index) {
			temArray[i]=true;
		}

	}

	this.setState({mouseOver:temArray});
	var myYou="myYoutube"+index;
	// console.log(this.refs);
	this.refs[myYou].internalPlayer.seekTo(0)
	this.refs[myYou].internalPlayer.playVideo()

}

	
	handelOutVideo(e,index){
		var myYou="myYoutube"+index;
		this.refs[myYou].internalPlayer.pauseVideo()
		this.setState({mouseOver:false});
		clearTimeout(timer)
	}



handelOverWord(e,index){

	var temArray=[false,false,false,false];
	for (var i = 0; i <4; i++) {
		if (i==index) {
			temArray[i]=true;
		}

	}
	
	// console.loge.target.getBoundingClientRect().top(e.target.getBoundingClientRect().top)
	var x=e.target.getBoundingClientRect().left;
	var y=e.target.getBoundingClientRect().top;
	console.log(e.clientX)
	this.setState({mouseOverWord:temArray,
		mouseWordXY:{divX:e.clientX-x+10,divY:e.clientY-y+10}
	})


}


handelOutWord(e){
	console.log(e.clientX)
	this.setState({mouseOverWord:false	
	})
}


_onPlay(){
	var _this=this;
	 window.timer=setTimeout(function(){
		_this.refs.myYoutube.internalPlayer.pauseVideo();

		_this.handelOutVideo()
	},6000)
	
}



	render(){

		 const opts = {
   						  height: '250',
   						  width: '100%',
   						  playerVars: { // https://developers.google.com/youtube/player_parameters
   						    autoplay: 0,
   						   	enablejsapi:1,
   						   	controls:0,
   						   	modestbranding:1
   						   
   						  }
   						};

	// console.log(this.props.mostPop)
		if (this.props.mostPop.length>1) {
			var list=new Array();
			this.props.mostPop.map((item,index)=>{
				
				var tt=<div className="primary_showL1" style={{position:"relative"}}>
							<div id="videoWrap" onMouseEnter={(e)=>{this.handelOverVideo(e,index)}} onMouseLeave={(e)=>{this.handelOutVideo(e,index)}}>
								<div className={this.state.mouseOver[index]?"primary_showL_pic mouseOver":"primary_showL_pic"} id="primary_showL_pic" 
									style={
									this.state.mouseOverWord?{background:"url("+item.imgURL+") 50% 50% no-repeat",
									backgroundSize:"cover",position:"absolute",zIndex:"101",
									boxShadow: "1px 5px 5px #c2c2cc"
									}:
										{background:"url("+item.imgURL+") 50% 50% no-repeat",
										backgroundSize:"cover",position:"absolute",zIndex:"101"}
									} 
									>
								</div>
								<div  className="youtube" id="myYou" style={
										this.state.mouseOver?{display:"block",position:"absolute"}:{display:"none",position:"absolute"}
										} >
									<YouTube
										ref={"myYoutube"+index}
										id="myVideo" 
      						 			videoId={item.videoId}
      						 			opts={opts}
      						 			onPlay={(event)=>{this._onPlay(event)}}
      								/>
								</div >
							</div>
							<div className={this.state.mouseOverWord[index]?"primary_showL_word_mouseOver1":"primary_showL_word"} 
									onMouseOver={(e)=>{this.handelOverWord(e,index)}}
									onMouseOut={(e)=>{this.handelOutWord(e)}}
									>{item.title}
								<div className="mouseWord" style={
									this.state.mouseOverWord[index]?{display:"block",top:this.state.mouseWordXY.divY,
									left:this.state.mouseWordXY.divX
									}:{display:"none"}
									}>
									{item.title}
								</div>
							</div>
							
						</div>;

						list.push(tt);
			})
		}



		return(<div className="mostPop">
					<div className="mostPop_center">
						{
						list
						}
					</div>
					<div className="siderPic">
								<ul>
									<li style={{
										background:"url("+require("../../static/images/siderpic1.jpg")+")",
										backgroundSize:"100% 100%"
										}}>
										<span>first</span>
									</li>
									<li style={{
										background:"url("+require("../../static/images/siderpic2.jpg")+")",
										backgroundSize:"100% 100%"
										}}>
										<span>second</span>
									</li>
									<li style={{
										background:"url("+require("../../static/images/siderpic3.jpg")+")",
										backgroundSize:"100% 100%"
										}}>
										<span>third</span>
									</li>
								</ul>
					</div>
			  </div>
			  );
	}


		componentDidMount(){
				this.props.getData()
		}
		
		
		
		}
		
		
		
		
		const mapStateToProps=(state)=>{
			return{
			mostPop:state.MostPopReducer.mostPop
			
			}
		}
		
		
		
		const mapDispatchToProps=(dispatch)=>{
			return{
				getData(){
					console.log("here")
					dispatch(actionCreators.getData())
				}
			}
		}



export default connect(mapStateToProps,mapDispatchToProps)(MostPop)





// componentDidMount(){
// 	// console.log(this.props.match.params.keyword)
// 	this.props.getData(this.props.match.params.keyword)
// }
// }


// const mapStateToProps=(state)=>{
// 	return{
// 		loginState:state.LoginReducer.loginReturn,
// 		primaryData1:state.PrimaryReducer.primaryData2
// 	}
// }


// const mapDispatchToProps=(dispatch)=>{
// 	return{
// 		getData(no){
// 			dispatch(actionCreators.getData(no))
// 		}
		
// 	}
// }


// <div className="primary_down">
								// 	<ul>
								// 		<li><Link to="/uni/biology">biology</Link></li>
								// 		<li><Link to="/uni/chemistry">chemistry</Link></li>
										
								// 	</ul>
								// </div>



//<div id="mostPop_logo" style={{
//background:"url(../images/decoration.jpg)",
//backgroundSize:"100% 100%"
//}}>
	
//</div>