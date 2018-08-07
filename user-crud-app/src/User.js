import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);

  }

  render(){
    const {name, memberType,} = this.props;
    return(
      <div>
      <span>{name}</span>
       {' | '}
       <span>{memberType}</span>
      </div>
    )
  }

}


  export default User;
