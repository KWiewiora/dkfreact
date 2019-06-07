import React from 'react';
import firebase from '@firebase/app';
import dbfire from './config/dbconfig';

/* Repertuar na dany rok */
/* {this.props.match.params.year} */
class RepofYear extends React.Component {
  constructor(props){
    super(props);
    
    const rootRef = dbfire.database().ref();
    const repertory = rootRef.child('repertory').orderByKey();
    this.state = {
      filmsNumber: [],
      cover: [],
      description: [],
      details: [],
      filmweb: [],
      projection: [],
      title: [],
      currentFilms: [],
      film: [],
      
    };
     repertory.once('value', snapshot => {
      snapshot.forEach(child =>{
        this.setState({
          filmsNumber: this.state.filmsNumber.concat([child.key]),
          cover: this.state.cover.concat([child.val().cover]),
          description: this.state.description.concat([child.val().description]),
          details: this.state.details.concat([child.val().details]),
          filmweb: this.state.filmweb.concat([child.val().filmweb]),
          projection: this.state.projection.concat([child.val().projection]),
          title: this.state.title.concat([child.val().title]),
        });  
      }); 
    });
  }
  getSpecificYear(year){
    this.setState({
      chosenYear: year,
    });
  }
  getFilmsfromYear(){
    var titles = [];
    
    for(var i = 0; i <= this.state.projection.length; i++){
      var str = this.state.projection[i];
      titles.push(str);
      /* if(str.substring(0,4) === this.state.chosenYear){
        titles.push(this.state.title[i]);
      } 
      titles.push(twoja);
    } */
    }
  }
  componentWillMount(){
    this.getFilmsfromYear();
    this.getSpecificYear(this.props.match.params.year);
    const film = this.state.filmsNumber.map((index) =>
      <div className = "film">
      <h4 className = "title">{this.state.title[index]}</h4>
      <br/>
      <p>
        {this.state.description[index]}                         
      </p>
      </div>
    );
    this.setState({
      film: film,
    });
  }
  render() {
    return(
      <div className = "order2">{this.state.film} heeej</div>
    )
  }
}
export default RepofYear;  