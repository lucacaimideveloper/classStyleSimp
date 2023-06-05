import React, { Component } from "react";

class Contents extends Component {
  render() {
    const { character, quote, image, like, onLikeToggle, onDelete, id } =
      this.props;
    // let counter = 0;

    // forEach(() => {
    //   if (like) counter++;
    // });
    return (
      <>
        <></>
        <div className="container">
          <div className="title">
            <h1>{character}</h1>
          </div>
          <div className="quote">
            <p>{quote}</p>
          </div>
          <div className="img">
            <img src={image}></img>
          </div>
          <div className="btn">
            <button onClick={() => onLikeToggle(id)}>
              <i
                style={{ color: like ? " red" : " grey" }}
                className="fa-solid fa-heart"></i>
            </button>
            {/* <p>{counter}</p> */}
            <button onClick={() => onDelete(this.props.id)}>Delete</button>
          </div>
        </div>
      </>
    );
  }
}

export default Contents;
