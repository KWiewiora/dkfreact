import React from 'react';
import './index.css';

import firebase from '@firebase/app';
import InfoBar from './components/InfoBar.js';

class Home extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	componentDidMount(){
		const rootRef = firebase.database().ref();
		const dbRef = rootRef.child('homepage/0/body');
	
		dbRef.on('value', snapshot => {
		this.setState({
			body: snapshot.val()
		});
	});
	}
	render() {
		return(
			<main>
				<article dangerouslySetInnerHTML={{__html: this.state.body}} />
				<InfoBar></InfoBar>
			</main>
			
		)
	}
}

export default Home;