import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";

class App extends React.Component {
  state = {
    user: {},
    userFollowers: [],
    followersData: []
  };

  componentDidMount() {
    axios(`https://api.github.com/users/SyriiAdvent`)
    .then(response => {
      // console.log(response.data)
      this.setState({
        user: response.data
      });
    })
    .catch(error => console.log("error: ", error))
    .then(() => {
      axios(`https://api.github.com/users/SyriiAdvent/followers`)
        .then(response => {
          // console.log("followers data ", response.data);
          this.setState({
            userFollowers: response.data
          });
        })
        .catch(error => console.log("error: ", error));
    })
    .catch(error => console.log("error: ", error))

    // console.log(this.state.userFollowers)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU is Running')
    if(prevState.userFollowers !== this.state.userFollowers) {
      this.state.userFollowers.forEach(ele => {
        // console.log(ele)
        axios(`${ele.url}`)
        .then(response => {
          console.log(response.data)
          this.setState({
            followersData: [...this.state.followersData, response.data]
          })
        })
        .catch(error => console.log(error))
      })
    }
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        {/* {console.log(this.state.userFollowers)} */}
        {this.state.followersData.map((items) => <UserCard key={items.node_id} user={items} />)}
      </div>
    );
  }
}

export default App;
