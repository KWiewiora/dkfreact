import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from '../Home.js';

const Bar = () => {
	return(
		<div id="bar">
			<nav>
				<Router>
					<Link to = "/">KINO</Link>
					<Link to = "/repertuar" className = "orange-text">REPERTUAR</Link>
					<Link to = "/blog">BLOG</Link>
					<Link to = "/o-nas">O NAS</Link>
					<Link to = "/kontakt">KONTAKT</Link>
                    <div className = "hidden">
                      <Route exact path="/" component={Home} />
                    </div>
				</Router>
			</nav>
			<h4 className="logo">DKF Politechnika</h4>
		</div>
	);
}

export default Bar;