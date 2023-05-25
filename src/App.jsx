import React, { Component } from "react";
import axios from "axios";
import Data from "./componets/Data.jsx";
import Loading from "./componets/Loading.jsx";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    //create a random id
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
    //
    console.log(data);
    //set a new state with api data inside
    this.setState({ data });
  }

  //take a random id
  //find the index
  //create a box with the hold state
  //splice the index
  //create a new state
  onDelete = (id) => {
    const indexOf = this.state.data.findIndex((character) => {
      return character.id === id;
    });
    const data = [...this.state.data];
    data.splice(indexOf, 1);
    this.setState({ data });
  };
  onLikeToggle = (id) => {
    const indexOf = this.state.data.findIndex((character) => {
      return character.id === id;
    });
    const data = [...this.state.data];
    data[indexOf].like = !data[indexOf].like;
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    //wait for data
    if (!data) {
      return <Loading />;
    }
    // if you run out of data
    if (data.length === 0) {
      return <p>You have delete everything</p>;
    }
    // calculate total
    let counter = 0;

    data.forEach((charcater) => {
      if (charcater.like) counter++;
    });
    //transport data and function in other components
    return (
      <>
        <h1>liked = {counter} </h1>
        <Data
          data={data}
          onDelete={this.onDelete}
          onLikeToggle={this.onLikeToggle}
        />
      </>
    );
  }
}

export default App;
