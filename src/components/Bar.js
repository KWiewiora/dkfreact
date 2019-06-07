import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "../index.css";
import Home from '../Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Socials from './Socials.js';
import Blog from './Blog.js';
import Repertoire from './Repertoire.js';
import RepofYear from './RepofYear.js';
import Login from './auth/Login.js';


const Bar = () => {
	return(
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

            <main>
            <Socials></Socials>            
			<Route exact path="/" component={Home} />
            <Route exact path="/repertuar" component={Repertoire} />
            <Route path = "/repertuar/:year" component = {RepofYear}/>
			<Route exact path="/o-nas" component={About} />
            <Route exact path="/blog" component={Blog} />
			<Route exact path="/kontakt" component={Contact} />
            <Route exact path="/loguj" component={Login} />
			
            </main>
		</Router>
	);
}

export default Bar;