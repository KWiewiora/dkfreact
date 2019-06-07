
import dbfire from './config/dbconfig';
import React from 'react';

const CheckDate= () => {
  let event = [];
  const rootRef = dbfire.database().ref();
  const repertory = rootRef.child('repertory').orderByKey();
  repertory.once('value', snapshot => {
    snapshot.forEach(child =>{
      event.push(child.val().projection);  
    })
    
  })
  return event;
}

const InfoBar = () => {
		return(
			<aside>
              <span className = "topic">Najbliższy pokaz</span>
              <br/>
              <div className = "orange-text">
                Już wkrótce
              </div>	
              <br/>
              <br/> 
              <br/>
              <span className = "topic">Najbliższe wydarzenie</span>
              <br/>
              <div className = "divHeight"> Już wkrótce</div>
			</aside>
		)
}

export default InfoBar;