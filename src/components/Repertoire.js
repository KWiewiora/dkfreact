import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import dbfire from './config/dbconfig';
class Repertoire extends React.Component {
  constructor(){
    super();
    var year;
    var years = [];
    var i = 0;
    for (year = new Date().getFullYear(); year >= 2009; year-- )
    {
      years[i] = year;
      i++;
    }
    const yearList =  years.map((object,index) =>
      <React.Fragment>
      <Link year = {years[index]} className = "year" to = {'repertuar/'+ years[index]} key = {years[index]}>{years[index]} </Link>
      </React.Fragment>
    );
    this.state = {
      yearList: yearList
    }
  }
  passYear(y){
    this.setState({
      year: y,
    })
  }
  render(){
    return(
          <div className = "year_container">
            <div className = "years">
              {this.state.yearList}
            </div>
          </div>
        
    )
  }
}
  /* Repertuar na dany rok */

class RepofYear extends React.Component{

  render() {
    return(
      <div>TWOJA STARA</div>
    )
  }
}


export default Repertoire;