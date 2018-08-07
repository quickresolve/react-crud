import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }


  onDelete(){
      const {onDelete, name} = this.props;

      onDelete(name);
  }

  render(){
    const {name, memberType,} = this.props;
    return(
      <div>
      <span>{name}</span>
       {' | '}
      <span>{memberType}</span>
       {' | '}
      <button onClick={this.onDelete}>Delete</button>
      </div>
    )
  }

}


export default User;
