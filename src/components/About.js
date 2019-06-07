import React from 'react';
import '../index.css';
import a1 from '../graph/a1.jpg';
import dkf_about from '../graph/dkf_about.jpg';

class About extends React.Component {
	render() {
		return(
			<article className="article">
              <div>
				<span className="topic">Pokazy</span>
                <br/>
              </div>
              <div className = "articleFill">
                <div className = "articleImg">
                <img src={a1} className = "a1pic" alt = "budynekPWR"></img>
                </div>
                <div className = "articleText">
                Projekcje regularne odbywają się w każdy czwartek o godz. <b>19:00</b> w budynku <b>A1</b> Politechniki Wrocławskiej w sali <b>329</b>. Każdy z pokazów składa się z: <b>Prelekcji</b> na tematy filmu i twórcy, <b>Projekcji</b> oraz <b>Dyskusji</b>, do uczestnictwa w której zachęcamy wszystkich przybyłych.
                Pokazy są płatne:
                <li> 5zł – jednorazowa składka członkowska</li>
                <li> 15zł – karnet na 5 dowolnych wejść do wykorzystania w ciągu całego roku</li>
                </div>
              </div>
			 </article>
		)
	}
}

export default About;