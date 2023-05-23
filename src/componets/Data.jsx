import React, { Component } from "react";
import Card from "./Card";

class Data extends Component {
  render() {
    // const { data } = this.props;

    return (
      <>
        {this.props.data.map((item, key) => {
          return <Card item={item} key={key} />;
        })}
      </>
    );
  }
}

export default Data;
