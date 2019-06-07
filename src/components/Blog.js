import React from 'react';
import firebase from '@firebase/app';
import dbfire from './config/dbconfig';
import InfoBar from './InfoBar.js';
class Blog extends React.Component {
	constructor(){
		super();
		this.state = {
          articleNum: [],
          body: [],
          date: [],
          id: [],
          public_flag: [],
          tags: [],
          title: [],
          user_id: [],
          pic: [],
          articles2: '',
          
        };
	}
	componentDidMount(){
		const rootRef = dbfire.database().ref();
		const articles = rootRef.child('articles').orderByKey();
	
		articles.once('value', snapshot => {
          snapshot.forEach(child =>{
            this.setState({
              articleNum: this.state.articleNum.concat([child.key]),
              body: this.state.body.concat([child.val().body]),
              date: this.state.date.concat([child.val().date]),
              id: this.state.id.concat([child.val().id]),
              public_flag: this.state.public_flag.concat([child.val().public_flag]),
              tags: this.state.tags.concat([child.val().tags]),
              title: this.state.title.concat([child.val().title]),
              user_id: this.state.user_id.concat([child.val().user_id]),
              pic: this.state.pic.concat([child.val().pic]),
            });  
          });
          const getPic = (i) => {
            const style = {
              width: '100%',
            };
            let pic = '';
            switch(i){
              case 2:
              pic = '../graph/dofA.jpg';
            }
            return <img src = {require(pic)} style={style}/>;
          }
          const articleList = this.state.articleNum.map((dataList, index) =>
              <article>
                <h4 className = 'title'> {this.state.title[index]}
                </h4>
                <br />
                <p dangerouslySetInnerHTML={{__html: this.state.body[index]}} />
                <span className = "date">        
                  {this.state.date[index]}          
                </span>
                
                <hr />
              </article>
          );
          this.setState({
            articles: articleList,
             
          });
        });
    }                      
    render(){
      return(
      <React.Fragment>
          <div className = "blog">{this.state.articles}</div>
          <InfoBar></InfoBar>
      </React.Fragment>
    )
  }
}

export default Blog;