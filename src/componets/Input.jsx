import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <>
        <input type="text" onInput={this.props.onSearch}></input>
      </>
    );
  }
}

export default Input;
