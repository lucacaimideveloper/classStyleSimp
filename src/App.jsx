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
    console.log(data);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <Loading />;
    }

    return <Data data={data} />;
  }
}

export default App;
