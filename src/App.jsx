import React, { Component } from "react";
import axios from "axios";
import Data from "./componets/Data.jsx";
import Loading from "./componets/Loading.jsx";

class App extends Component {
  state = { searchInput: "", order: "" };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    console.log(data);
    //create a random id
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
    //

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
  //

  onLikeToggle = (id) => {
    const indexOf = this.state.data.findIndex((character) => {
      return character.id === id;
    });
    const data = [...this.state.data];
    data[indexOf].like = !data[indexOf].like;
    this.setState({ data });
  };
  //

  onSearch = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  onTempInput = (e) => {
    this.setState({ tempInput: e.target.value });
  };

  getFilterdList = (value) => {
    // const { data, tempInput } = this.state;
    // console.log(value, "hi");
    // let filterData = [...data];

    // if (value === "ASC") {
    //   filterData.sort((a, b) => {
    //     if (a.character > b.character) return 1;
    //     if (a.character < b.character) return -1;
    //   });
    // } else if (value === "DSC") {
    //   filterData.sort((a, b) => {
    //     if (a.character > b.character) return -1;
    //     if (a.character < b.character) return 1;
    //   });
    // }
    // return filterData;
    this.setState({ order: value });
    console.log(this.state.order, "l73");
  };

  render() {
    const { data } = this.state;
    // console.log(this.state);
    //wait for data
    if (!data) {
      return <Loading />;
    }
    // if you run out of data
    if (data.length === 0) {
      return <p>You have delete everything</p>;
    }

    let filterData = [...data];
    let filterd = [...data];

    if (this.state.order === "") {
      filterd = [...data];
      if (this.state.order === "ASC") {
        console.log("ASC", this.state.order, "ui");
        filterd = filterData.sort((a, b) => {
          if (a.character > b.character) return 1;
          if (a.character < b.character) return -1;
        });
      } else if (this.state.order === "DSC") {
        console.log("DSC");

        filterd = filterData.sort((a, b) => {
          if (a.character > b.character) return -1;
          if (a.character < b.character) return 1;
        });
      }
    }
    // calculate total
    let counter = 0;
    data.forEach((charcater) => {
      if (charcater.like) counter++;
    });

    // if (this.state.searchInput) {
    //   data.filter((char) => {
    //     return char.character
    //       .toLowerCase()
    //       .includes(this.state.searchInput.toLowerCase());
    //   });
    //   return true;
    // }

    //

    // filter data we will show in our input box
    // let filterSearch = [...data];
    // filterSearch = data.filter((char) => {
    //   // console.log(char.data, "hi");
    //   if (char.character.toLowerCase().includes(searchInput.toLowerCase())) {
    //     return true;
    //   }
    // });

    //transport data and function in other components
    return (
      <>
        <h1>liked = {counter} </h1>

        {/* <input type="text" onInput={this.onSearch}></input> */}
        <Data
          data={filterd}
          getFilterdList={this.getFilterdList}
          onDelete={this.onDelete}
          onLikeToggle={this.onLikeToggle}
          onSearch={this.onSearch}
          onTempInput={this.onTempInput}
        />
      </>
    );
  }
}

export default App;
