import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './Components/UserCard';

class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount() {
    axios(`https://api.github.com/users/SyriiAdvent`)
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data
        })
      })
  }

  render() {
    return (
      <div className='App'>
        <UserCard user={this.state.user} />
      </div>
    )
  }
}


export default App;
