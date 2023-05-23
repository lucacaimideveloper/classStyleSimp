import React, { Component } from "react";
import Contents from "./Contents";

class Card extends Component {
  state = { like: false };

  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
  };

  onDelete = () => {};
  render() {
    const { image, quote, character } = this.props.item;
    return (
      <>
        <Contents
          quote={quote}
          character={character}
          like={this.state.like}
          onLikeToggle={this.onLikeToggle}
          image={image}
        />
      </>
    );
  }
}
export default Card;
