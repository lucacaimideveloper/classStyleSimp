import React, { Component } from "react";
import Contents from "./Contents";

class Card extends Component {
  render() {
    const { image, quote, character, id, like } = this.props.item;

    return (
      <>
        <Contents
          quote={quote}
          character={character}
          like={like}
          image={image}
          onDelete={this.props.onDelete}
          id={id}
          onLikeToggle={this.props.onLikeToggle}
        />
      </>
    );
  }
}
export default Card;
