import React from 'react'
import './style.css'
import Header from '../../component/header/index.jsx'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube';



class Primary extends React.Component{

	constructor(){
		super();
		this.state={
			mouseOver:false,
			mouseOverWord:false,
			mouseWordXY:{}
		}
	}

handelOverVideo(){
	console.log("here")
	this.setState({mouseOver:true});
	this.refs.myYoutube.internalPlayer.seekTo(0)
	this.refs.myYoutube.internalPlayer.playVideo()

}
	
	handelOutVideo(){
		this.refs.myYoutube.internalPlayer.pauseVideo()
		this.setState({mouseOver:false});
		clearTimeout(timer)
	}

_onPlay(){
	var _this=this;
	 window.timer=setTimeout(function(){
		_this.refs.myYoutube.internalPlayer.pauseVideo();

		_this.handelOutVideo()
	},6000)
	
}

handelOverWord(e){
	
	// console.loge.target.getBoundingClientRect().top(e.target.getBoundingClientRect().top)
	var x=e.target.getBoundingClientRect().left;
	var y=e.target.getBoundingClientRect().top;
	console.log(e.clientX)
	this.setState({mouseOverWord:true,
		mouseWordXY:{divX:e.clientX-x+10,divY:e.clientY-y+10}
	})


}

handelOutWord(e){
	console.log(e.clientX)
	this.setState({mouseOverWord:false	
	})
}





	render(){
		 const opts = {
   						  height: '250',
   						  width: '100%',
   						  playerVars: { // https://developers.google.com/youtube/player_parameters
   						    autoplay: 0,
   						   	enablejsapi:1,
   						   
   						  }
   						};
		// console.log(this.props)
		if (this.props.primaryData1.length>1) {
			// console.log(this.props.primaryData1)
			var list01=this.props.primaryData1[0];
			var list02=this.props.primaryData1[1];
			var list03=this.props.primaryData1[2];
			var list04=this.props.primaryData1[3];
			var list011=list01.map(item=>{
				return(
						<Link to={`/detail/primary/${this.props.match.params.keyword}/${item.id}`}>
							<div className="primary_showL" style={{position:"relative"}}>
								<div id="videoWrap" onMouseEnter={(e)=>{this.handelOverVideo(e)}} onMouseLeave={(e)=>{this.handelOutVideo(e)}}>
									<div className={this.state.mouseOver?"primary_showL_pic mouseOver":"primary_showL_pic"} id="primary_showL_pic" 
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
											ref="myYoutube"
											id="myVideo" 
      							 			videoId="2g811Eo7K8U"
      							 			opts={opts}
      							 			onPlay={(event)=>{this._onPlay(event)}}
      									/>
									</div >
								</div>
								<div className={this.state.mouseOverWord?"primary_showL_word_mouseOver":"primary_showL_word"} 
										onMouseOver={(e)=>{this.handelOverWord(e)}}
										onMouseOut={(e)=>{this.handelOutWord(e)}}
										>{item.title}
									<div className="mouseWord" style={
										this.state.mouseOverWord?{display:"block",top:this.state.mouseWordXY.divY,
										left:this.state.mouseWordXY.divX
									}:{}

									}>
										{item.title}
									</div>
								</div>
							</div>
						</Link>
					);
					});


			var list021=list02.map(item=>{
				return(
						<Link to={`/detail/primary/${this.props.match.params.keyword}/${item.id}`}>
							<div className="primary_showR_item">
								<div className="primary_showR_item_pic" style={{
									background:"url("+item.imgURL+") 50% 50% no-repeat",
									backgroundSize:"cover",
									
									}}></div>
								<div className="primary_showR_item_word">{item.title}</div>
							</div>
						</Link>
				);
			})

			var list031=list03.map(item=>{
				return(
						<Link to={`/detail/primary/${this.props.match.params.keyword}/${item.id}`}>
							<div  className="primary_recomP_item">
								<div className="primary_recomP_itemP" style={{
									background:"url("+item.imgURL+") 50% 50% no-repeat",
									backgroundSize:"cover",
									}}></div>
								<div className="primary_recomP_itemW">{item.title}</div>
							</div>
						</Link>
				);
			})


			var list041=list04.map(item=>{
				return(
						<Link to={`/detail/primary/${this.props.match.params.keyword}/${item.id}`}>
							<div className="primary_interestP">
								<div className="primary_interestP_item">
									<div className="primary_interestP_itemPic" style={{
										background:"url("+item.imgURL+") 50% 50% no-repeat",
										backgroundSize:"cover",
									}}></div>
									<div className="primary_interestP_title">{item.title}</div>
									<div className="primary_interestP_content">
										{item.content}
									</div>
								</div>
							</div>
						</Link>
				);
			})
							
		}
		
		return(

			<div className="Primary">
					<Header history={this.props.history}/>
					<div className="primary_center">
						<div className="primary_show">
							{
								list011
							}
							
							<div className="primary_showR">
							{
								list021
							}
							</div>
						</div>
						<div className="primary_recom">
							<div className="primary_recomT">recomend</div>
							<div className="primary_recomP">
								{
									list031
								}
							</div>
						</div>
						<div className="primary_interest">
							<div className="primary_interestT">interest</div>
							{
								list041
							}
							
						</div>
						
						
					</div>
			  </div>
			  );
	}

	// goDetail(id){
			
	// 			this.props.history.push(`/detail/${id}`)
	// 		}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.match.params.keyword)
		// console.log(this.props)
		// console.log(nextProps)
		if (this.props.match.params!=nextProps.match.params) {
			this.props.getData(nextProps.match.params.keyword)
			// console.log("here")
		}
	
}

componentDidMount(){
	// console.log(this.props.match.params.keyword)
	this.props.getData(this.props.match.params.keyword)
}
}


const mapStateToProps=(state)=>{
	return{
		loginState:state.LoginReducer.loginReturn,
		primaryData1:state.PrimaryReducer.primaryData2
	}
}


const mapDispatchToProps=(dispatch)=>{
	return{
		getData(no){
			dispatch(actionCreators.getData(no))
		}
		
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Primary)

// PrimaryData1:state.PrimaryReducer.PrimaryData


// this.state.mouseOver?
// <iframe id="player" style={{position:"absolute"}}
// 	width="100%" height="250" src="https://www.youtube.com/embed/0xwi0tBRRcQ?autoplay=1&controls=0&fs=0"
// 	frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
// 	 onMouseOut={(e)=>{this.handelMOut(e)}}>
//  </ifr

// onMouseEnter={(e)=>{this.handelMOver(e)}}
