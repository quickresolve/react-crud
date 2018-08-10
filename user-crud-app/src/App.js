import React, { Component } from 'react';
import './App.css';

import User from './User';
import AddUser from './AddUser';


const users = [
  {
    name: 'Jane Doe',
    memberType: 'Basic'
  },
  {
    name: 'John Smith',
    memberType: 'Basic'
  },
  {
    name: 'Riley Thomas',
    memberType: 'Pro'
  }
];

localStorage.setItem('users', JSON.stringify(users));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'User Manager',
      users: JSON.parse(localStorage.getItem('users')),
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const users = this.getUsers();

    this.setState({users});
  }

  getUsers(){
    return this.state.users;
  }

  onAdd(name, memberType){
    const users = this.getUsers();

    users.push({
      name,
      memberType,
    });

    this.setState({users});
  }

  onDelete(name){
    const users = this.getUsers();

    const filteredUsers = users.filter(user => {
      return user.name !== name;
    })

    this.setState({users: filteredUsers});
  }

  onEditSubmit(name, memberType, originalName) {
   let users = this.getUsers();

   users = users.map(user => {
     if(user.name === originalName){
       user.name = name;
       user.memberType = memberType;
     }

     return user;
   });
   this.setState({users});
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <div className="App-intro">
        <AddUser
          onAdd={this.onAdd}
         />
        <h3>Users</h3>
        {
          this.state.users.map(user => {
            return(
              <User
                key={user.name}
                {...user}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            )}
          )
        }
        </div>
      </div>
    );
  }
}

export default App;
