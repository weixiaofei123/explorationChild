import React from 'react'
import './style.css'
import Header from '../../component/header/index.jsx'
import * as actionCreators from './store/actionCreators.js'
import { connect } from 'react-redux'
import Store from '../../store/store.js'
import Vip from '../../component/vip/index.jsx'



class Detail extends React.Component{
	render(){
				console.log(this.props.detailViewData)
		return(
				<div className="detail">
				
					<Header history={this.props.history}/>
					<div className="center">
						<div className="detail_content">
							<div className="detail_contentVideo">
								
							
								<iframe className="detail_contentVideoFrame" height="498" width="100%" src={this.props.detailViewData?this.props.detailViewData.src:null} frameBorder="0"  allowFullScreen="allowfullscreen"></iframe>
							
							</div>
							
							
							<div className="detail_contentTitle">{this.props.detailViewData.title}</div>
							<div className="detail_contentWord">{this.props.detailViewData.formalContent}</div>
						</div>
					</div>
					{
					this.props.vipState?<Vip />:null
				}
			  	</div>
			  );
	}

	componentDidMount(){
		// console.log(this.props.match.params.data)
		this.props.detailView(this.props.match.params.data,this.props.match.params.table,this.props.match.params.id);

	}


}

const mapStateToProps=(state)=>{
	return{
	detailViewData:state.DetailReducer.DetailViewData,
	vipState:state.DetailReducer.vipState
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		detailView(data,table,id){
			dispatch(actionCreators.getDetailData(data,table,id))
		},
		vip(){
			dispatch(actionCreators.getVip())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)






							

							// <iframe height="498" width="510" src='http://player.youku.com/embed/XNDMyOTEzNjI4OA==' frameborder="0"  allowfullscreen="allowfullscreen"></iframe>
							// <video className="detail_contentVideoDetail"   src={this.props.detailViewData.src} controls="controls"></video>
							// <iframe height=498 width=510 src='http://player.youku.com/embed/XNDMzMzE2MDk5Mg==' frameborder=0 'allowfullscreen'></iframe>
							// <div className="detail_contentVideoVip">
							// 	<div className="detail_contentVideoVipTitle">
							// 		开通VIP会员后收看完整版
							// 	</div>
							// 	<div onClick={()=>{this.props.vip()}} className="detail_contentVideoVipButton">
							// 		开通VIP会员
							// 	</div>
								
								
							// </div>