import React, { Component } from "react";

class Contents extends Component {
  render() {
    const { character, quote, image, like, onLikeToggle, onDelete, id } =
      this.props;
    return (
      <>
        <h1>{character}</h1>
        <p>{quote}</p>
        <img src={image}></img>
        <button onClick={() => onLikeToggle(id)}>
          <i className="fa-solid fa-heart"></i>
          {like ? "liked" : "notLiked"}
        </button>
        <button onClick={() => onDelete(this.props.id)}>Delete</button>
      </>
    );
  }
}

export default Contents;
