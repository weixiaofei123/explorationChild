import React from 'react'
import Header from '../../component/header/index.jsx'
import "./index.css"
import { connect } from 'react-redux'
import Store from "../../store/store.js"
import * as actionCreators from './store/actionCreators.js'
import UniReducer from './store/reducer.js'

class Uni extends React.Component{
	constructor(){
		super()
	}

	render(){
		console.log(this.props.res)
		if (this.props.res.length>0) {
			var data=this.props.res;
			var list=data.map(item=>{
				return(
					<div>
								<h2>{item.id}</h2>
								<div>
									{item.title}
								</div>
							</div>
					)
			})
		}else{
			var list=<ul>
							<li>
								<h2>The King</h2>
								<div>
									wo wiaojfoa aojofjoaij aofj aojf oajfoaofjao
								</div>
							</li>
							<li>
								<h2>The King</h2>
								<div>
									wo wiaojfoa aojofjoaij aofj aojf oajfoaofjao
								</div>
							</li>
							<li>
								<h2>The King</h2>
								<div>
									wo wiaojfoa aojofjoaij aofj aojf oajfoaofjao
								</div>
							</li>
							<li>
								<h2>The King</h2>
								<div>
									wo wiaojfoa aojofjoaij aofj aojf oajfoaofjao
								</div>
							</li>
							</ul>;
		}
		
		return(<div class="uni">
					<Header />
					<div class="uni_img"></div>
					<div class="uni_content">
						
							{list}
						
						<div>
							<from>
								<span class="uni_content_name">name:</span><input type="text"/> <br />
								<span> password:</span><input type="text"/><br />
								<input type="button" value="apply" style={{
									margin:"0px 20%"
								}}/>
							</from>
						</div>
					</div>

				</div>)
	}


	componentDidMount(){
		// console.log(this.props.match.params.type)
		this.props.getData(this.props.match.params.type)
	}

	componentWillReceiveProps(nextProps){
		if (this.props.match.params!=nextProps.match.params) {
			this.props.getData(nextProps.match.params.type);
		}
	}
}


const mapStateToProps=(state)=>{
	return{
		res:state.UniReducer.res
	};
}

const mapDispatchToProps=(dispatch)=>{
	return{
			getData(data){
				if (data) {
					dispatch(actionCreators.getData(data))
				}
				
			}
			
			
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Uni);