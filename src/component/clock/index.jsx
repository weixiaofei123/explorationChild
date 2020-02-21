import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'

class Clock extends React.Component{
	render(){
		var _this=this;
		return(<div id="clock">
					<canvas id="canvas" ref="canvas" width="200" height="200"></canvas>
			  </div>
			  );
	}

	componentDidMount(){
		// console.log(this.refs.canvas)
		var ctx=this.refs.canvas.getContext("2d");
	

			

			var clock=function(){

				ctx.clearRect(0,0,200,200)
				ctx.beginPath()
				ctx.arc(100,100,50,0,2*Math.PI);
				ctx.lineWidth="5";
				ctx.strokeStyle="#d7e818";
				ctx.stroke();
			for (var i = 1; i <13; i++) {
			ctx.beginPath();
			ctx.fillText(i,100+Math.sin(Math.PI/180*30*i)*40-4,50+50-Math.cos(Math.PI/180*30*i)*40+2);
			}

			ctx.beginPath()
			ctx.arc(100,100,2,0,2*Math.PI);
			ctx.fillStyle="black";
			ctx.fill();
			var myDate=new Date();
			var H=myDate.getHours()>12?myDate.getHours()-12:myDate.getHours()
			// var H=12
			var M=myDate.getMinutes()
			var S=myDate.getSeconds()
			// var M=0
			// var S=0
			// console.log(H,M,S)

			ctx.beginPath()
			ctx.moveTo(100,100)
			ctx.lineTo(100+25*Math.sin((H*30+(M*60+S)*30/(60*60))*Math.PI/180),100-25*Math.cos((H*30+(M*60+S)*30/(60*60))*Math.PI/180))
			ctx.lineWidth="5";
			ctx.strokeStyle="#d7e818";
			ctx.stroke()

			ctx.beginPath()
			ctx.moveTo(100,100)
			ctx.lineTo(100+35*Math.sin((M/60)*2*Math.PI),100-35*Math.cos((M/60)*2*Math.PI))
			ctx.lineWidth="5";
			ctx.strokeStyle="#d7e818";
			ctx.stroke()

			ctx.beginPath()
			ctx.moveTo(100,100)
			ctx.lineTo(100+42*Math.sin((S/60)*2*Math.PI),100-42*Math.cos((S/60)*2*Math.PI))
			ctx.lineWidth="5";
			ctx.strokeStyle="#d7e818";
			ctx.stroke()

			requestAnimationFrame(clock);
			}

			clock()

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
export default connect(mapStateToProps,mapDispatchToProps)(Clock)





