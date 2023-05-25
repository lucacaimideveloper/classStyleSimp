import React, { Component } from "react";
import Card from "./Card";

class Data extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {/* map over data and take item and id 
      pass overe the mechanism and item to the childs*/}
        {this.props.data.map((item, index) => {
          return (
            <Card
              item={item}
              key={item.id}
              onDelete={this.props.onDelete}
              onLikeToggle={this.props.onLikeToggle}
            />
          );
        })}
      </>
    );
  }
}

export default Data;
