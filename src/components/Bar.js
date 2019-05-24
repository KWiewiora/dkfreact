import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "../index.css";
import Home from '../Home.js';
import About from './About.js';
import Socials from './Socials.js';

const Bar = () => {
	return(
		<div>
		<Router>
			<div id="bar">
				<nav>

						<Link to = "/">KINO</Link>
						<Link to = "/repertuar" className = "orange-text">REPERTUAR</Link>
						<Link to = "/blog">BLOG</Link>
						<Link to = "/o-nas">O NAS</Link>
						<Link to = "/kontakt">KONTAKT</Link>
					
				</nav>
				<h4 className="logo">DKF Politechnika</h4>
			</div>
			<Route exact path="/" component={Home} />
			<Route exact path="/o-nas" component={About} />
		</Router>
		<Socials></Socials>
		</div>
	);
}

export default Bar;