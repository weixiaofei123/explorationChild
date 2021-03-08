import React from 'react'
import './index.css'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../../store/store.js'

class HighFlipPage extends React.Component{
	render(){
		
		return(<div className="highFlipPage">
						{
						this.props.bgcFi?<div className="originFi" >上一页</div>:
						<div  className="originFi">上一页</div>
					}
					{
						this.props.bgcFi?<div className="redFi" >1</div>:
						<div onClick={(e)=>{this.props.handelFi(e)}} className="originFi">1</div>
					}
					{
						this.props.bgcSe?<div className="redFi" >2</div>:
						<div onClick={(e)=>{this.props.handelSe(e)}} className="originFi">2</div>
					}
					{
						this.props.bgcFi?<div className="originFi" >下一页</div>:
						<div className="originFi">下一页</div>
					}
					
			  </div>
			  );
	}


}

const mapStateToProps=(state)=>{
	return{
		bgcFi:state.HighFlipPageReducer.bgc,
		bgcSe:state.HighFlipPageReducer.bgc2
	}
		
}

const mapDispatchToProps=(dispatch)=>{
	return{
		handelFi(e){
			var page=parseInt(e.target.innerHTML);

			dispatch(actionCreators.changeFi(page))
		},
			handelSe(e){
					var page=parseInt(e.target.innerHTML);
			dispatch(actionCreators.changeSe(page))
		},
		handelLast(e){
			var odiv=e.target.parentElement;
			if (odiv.children[1].innerHTML!="1") {
					for (var i = 1; i<odiv.children.length-1; i++) {
			var item=parseInt(odiv.children[i].innerHTML)-1;
			console.log(item)
			odiv.children[i].innerHTML=item;
		}
			}

	
		},
		handelNext(e){
			var odiv=e.target.parentElement;

		for (var i = 1; i<odiv.children.length-1; i++) {
			var item=parseInt(odiv.children[i].innerHTML)+1;
			console.log(item)
			odiv.children[i].innerHTML=item;
		}
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(HighFlipPage)

	// {
	// 					this.props.bgcFf?<div className="redFi" >5</div>:
	// 					<div onClick={(e)=>{this.props.handelFf(e)}} className="originFi">5</div>
	// 				} 