import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'; 
import App from './components/App';
import store from './store';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';

// import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { BrowserRouter, Route, Switch } from 'react-router-dom';




// ReactDOM.render((
// 	<Provider store={store}>
// 		<Router history={hashHistory}>
// 			<Route path="/" component={App}>
// 				<IndexRoute component={Home} />
// 				<Route path="login" component={Login} />
// 			</Route>
// 		</Router>
// 	</Provider> 
// ), document.getElementById('root'));

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Header appName="conduit" />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Home} />
				</Switch>
			</div>			
		</BrowserRouter>
	</Provider> 
), document.getElementById('root'));