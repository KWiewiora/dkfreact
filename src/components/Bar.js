import React from 'react';
import Menu from './menu/Menu.js';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Home from '../Home.js';

const Bar = () => {
	return(
		<div id="bar">
			<nav>
				<Router>
					<Menu 
						text = "KINO"
					/>
					<Menu 
						text = "REPERTUAR"
						link = "repertuar"
						classes = "orange-text"
					/>
					<Menu 
						text = "BLOG"
						link = "blog"
					/>
					<Menu 
						text = "O NAS"
						link = "o-nas"
					/>
					<Menu 
						text = "KONTAKT"
						link = "kontakt"
					/>
				</Router>
			</nav>
			<h4 className="logo">DKF Politechnika</h4>
		</div>
	);
}

export default Bar;