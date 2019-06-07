import React from 'react';
import './index.css';

import firebase from '@firebase/app';
import dbfire from './components/config/dbconfig';
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
        this.authListener();
	});
	}
    authListener() {
      dbfire.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({user});
        }
        else {
          this.setState({user: null});
        }
      });
    }
	render() {
		return(
            <React.Fragment>
				<article dangerouslySetInnerHTML={{__html: this.state.body}} />
				<InfoBar></InfoBar>
          {/*{this.state.user ? (<div> uzytkownik zalogowany </div>) : (<div> nikt nie jest zalogowany</div>) }*/}
			</React.Fragment>
		)
	}
}

export default Home;