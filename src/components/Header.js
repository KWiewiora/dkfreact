import React from 'react';
import "../index.css";
import logo from "./dkf_logo.png";
import * as firebase from 'firebase';
import {dbconfig} from '../dbconfig';



class Header extends React.Component {
	constructor(){
		super();
		firebase.initializeApp(dbconfig);
		this.state = {};
	}
	componentDidMount(){
		const rootRef = firebase.database().ref();
		const dbRef = rootRef.child('repertory/280/title');
	
		dbRef.on('value', snapshot => {
		this.setState({
			title: snapshot.val()
		});
		
	});
	}
	render() {
		return(
		<header>
			<div>
				<img src={logo} alt="DKF POLITECHNIKA" className = "logo"></img>
			</div>
			<div>
				<div className = "headerText">
					<h3>Dyskusyjny Klub Filmowy</h3>
					<h4 className = "fw-700">Politechnika<br/>
						Najbliższy pokaz
					</h4>
					<h4 className = "orange-text">{this.state.title}</h4>					
					<h3 className = "fw-400">Zapraszamy do sali 329 A-1</h3>
					<h2>PRELEKCJA <br/> PROJEKCJA <br/> DYSKUSJA</h2>
					<h4>Kino i Filmowe  wydarzenia</h4>
				</div>
			</div>
		</header>
		)
	}
}

export default Header;