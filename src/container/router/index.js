import React from "react";
import { HashRouter, Route, Link,Switch } from "react-router-dom"
import Home from '../home/index.jsx'
import Primary from '../primary/index.jsx'
import Secondary from '../secondary/index.jsx'
import University from '../university/index.jsx'
import Register from '../register/index.jsx'
import Login from '../login/index.jsx'
import Highschool from '../highschool/index.jsx'
import Detail from '../detail/index.jsx'
import Vip from '../../component/vip/index.jsx'
import Uni from '../../container/uni/index.jsx'
import SearchPage from '../../container/searchPage/index.jsx'
import MorePage from '../../container/morePage/index.jsx'






export default class App extends React.Component{
	render(){
		return(
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/primary/:keyword" component={Primary} />
					<Route exact path="/secondary/:lesson" component={Secondary} />
					<Route exact path="/detail/:data/:table/:id" component={Detail} />
					<Route exact path="/university/:type" component={University} />
				
					<Route exact path="/login" component={Login} />
					<Route exact path="/highschool/:type" component={Highschool} />
					<Route exact path="/vip" component={Vip} />
					<Route exact path="/uni/:type?" component={Uni} />
					<Route exact path="/searchpage/:value" component={SearchPage} />
					<Route exact path="/morepage/:value?" component={MorePage} />
					<Route exact path="/login/:value?" component={Login} />
					<Route exact path="/register/:value?" component={Register} />
				
				
					
				</Switch>
    		</HashRouter>
			  );
	}
}