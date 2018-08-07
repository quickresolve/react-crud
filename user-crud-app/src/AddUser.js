import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();

    this.props.onAdd(this.nameInput.value, this.memberTypeInput.value);

    this.nameInput.value = '';
    this.memberTypeInput.value = '';

  }



  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Add User</h3>
          <input placeholder='Name' ref={nameInput => this.nameInput = nameInput}></input>
          <input placeholder='MemberType' ref={memberTypeInput => this.memberTypeInput = memberTypeInput}></input>
          <button>Add</button>
        </form>
        <hr />
      </div>
    )
  }

}


  export default AddUser;
