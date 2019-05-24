import React from 'react';
import '../index.css';
import a1 from '../graph/a1.jpg';

class About extends React.Component {
	render() {
		return(
			<div className="article">
				<span className="topic">Pokazy</span>
				<p>
				<img src={a1} className = "a1pic"></img>
				Projekcje regularne odbywają się w każdy czwartek o godz. <b>19:00</b> w budynku <b>A1</b> Politechniki Wrocławskiej w sali <b>329</b>. Każdy z pokazów składa się z: <b>Prelekcji</b> na tematy filmu i twórcy, <b>Projekcji</b> oraz <b>Dyskusji</b>, do uczestnictwa w której zachęcamy wszystkich przybyłych.
				</p>
				Pokazy są płatne:
				<li> 5zł – jednorazowa składka członkowska</li>
				<li> 15zł – karnet na 5 dowolnych wejść do wykorzystania w ciągu całego roku</li>
			</div>
		)
	}
}

export default About;