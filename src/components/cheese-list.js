import React from 'react';

export default class CheeseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cheeses: [ 'Bath Blue','Barkham Blue','Buxton Blue']
    };
  }

  render(){
    const cheeseItems=this.state.cheeses.map(cheese =>(<li>{cheese}</li>));    
    return(
      <ul>
        {cheeseItems}  
      </ul>
    );
  }
}
