// App.js

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Software Engineer",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Developer"
      },
      show: false,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    // Set up an interval to update the timeElapsed state
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <div>
          <p>Time since last mount: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
