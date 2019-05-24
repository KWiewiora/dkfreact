import React from 'react';



class InfoBar extends React.Component {
	constructor(){
		super();
		var divHeight = {
			height: '3.5em',
		};
		var spanColor = {
			color: '#FFAE00',
		};
		this.state = {
			divHeight: divHeight,
			spanColor: spanColor,
		};
	}
	render(){
		return(
			<aside>
				<span style={this.state.spanColor}>
					ouyea
				</span>	
				<br/>
				<div style={this.state.divHeight}> yee</div>
			</aside>
		)
	}
}

export default InfoBar;