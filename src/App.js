import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state= {
    comment: {}
  }

  getComment = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments/4')
    .then(response => {
      console.log(response.data);
      this.setState({
        comment: response.data
      })
    })
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.getComment}>Récupérer mon commentaire</button>

        <h2>Nom de la personne: {this.state.comment.name}</h2>
        <h3>Email de la personne: {this.state.comment.email} </h3>
        <p>Message:<br/>
            {this.state.comment.body}
        </p>
      </div>
    )
  }
}
