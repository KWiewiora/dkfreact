import React from 'react';
import './Menu.css'

const Menu = ({text, link = "/", classes = " "}) => {
	return <a href={link} className={classes}> {text} </a>
}

export default Menu;