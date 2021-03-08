import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'
import * as bezier from "./bezier.js"


class Leaf extends React.Component{

	render(){
		// console.log(document.documentElement.scrollWidth,document.body.clientWidth,window.innerWidth)
		var W=document.documentElement.scrollWidth;
		var H=document.documentElement.scrollHeight;
		var _this=this;
		return(<div id="leaf">
					<img id="leaf_img" src={require('../../static/images/leaf.png')} alt=""/>
					<canvas id="canvas" ref="canvas" width={W} height={H}></canvas>
			  </div>
			  );
	}

	componentDidMount(){
		// console.log(this.refs.canvas)
		// console.log(document.documentElement.clientWidth,document.documentElement.clientHeight)
		var W=document.documentElement.scrollWidth;
		var H=document.documentElement.scrollHeight;
		var oImg=document.getElementById("leaf_img")
		var ctx=this.refs.canvas.getContext("2d");
		
			var location=0;
			var count=0;
			var _this=this;
			var leaf=function(){

				if (count%5==0) {
				

			ctx.clearRect(0,0,W,H)
			for (var i = 0; i <5; i++) {
					var curve=[{x:W-i*600,y:H/2}, {x:3*W/4+i*150,y:3*H/4+i*150}, {x:W/3+i*100,y:H/3+i*100},{x:10+i*300,y:10-i*300} ];
						var curvePoint=bezier._pointOnPath(curve,location);
					// console.log(curvePoint)
						ctx.drawImage(oImg,parseInt(curvePoint.x),parseInt(curvePoint.y));
				
				}
				location+=0.02;
			
				}
			
			count++;

			if (location>=1.5) {
				cancelAnimationFrame(leaf);
				// console.log(_this.refs.canvas.parentNode)
				_this.refs.canvas.parentNode.removeChild(_this.refs.canvas)
				return;
			}
			requestAnimationFrame(leaf);
			}
			
			leaf()

	}
}



const mapStateToProps=(state)=>{
	return{
	
	
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Leaf)





