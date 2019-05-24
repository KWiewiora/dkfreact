import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Bar from './components/Bar.js';
import * as serviceWorker from './serviceWorker';
import Rebase from 're-base';
import firebase from 'firebase';


class DKF extends React.Component {
	render() {
		return(
			<div className="DKF">
				<Header></Header>
				<Bar></Bar>
			</div>
		)
	}
	
}

ReactDOM.render(<DKF />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
