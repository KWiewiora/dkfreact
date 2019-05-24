import React from 'react';
import $ from 'jquery';
class Socials extends React.Component {
	
	componentDidMount(){
		var winHeight = $(window).height();
		var winPosition = $(window).scrollTop();
		var headerPosition = $("header").offset().top + $("header").height();
		if(winPosition > headerPosition){
			$("#bar_fixed").css('visibility', 'visible');
			$("#socials").css('visibility', 'visible');
			$("#socials").css('opacity', '1');
		}else{
			$("#bar_fixed").css('visibility', 'hidden');
			$("#socials").css('visibility', 'hidden');
			$("#socials").css('opacity', '0');
		}
	}
	render() {
		return(
		<div id="socials">
		<a href={"https://www.facebook.com/dkfpolitechnika/"} ><div className ="social_icon"><i className="fab fa-facebook-f"></i></div>
		</a>
			<a href={"https://twitter.com/dkfpolitechnika"} ><div className ="social_icon"><i className="fab fa-twitter"></i></div></a>
		<a href={"https://www.instagram.com/dkfpolitechnika/"}><div className="social_icon"><i className="fab fa-instagram"></i></div></a>
	</div>
	)
}
}
export default Socials;