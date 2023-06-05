import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { onSearch, getFilterdList } = this.props;
    return (
      <>
        <>
          <input type="text" onInput={onSearch}></input>
        </>
        <select onChange={(e) => getFilterdList(e.target.value)}>
          <option value="ASC">AZ</option>
          <option value="DSC">ZA</option>
        </select>
      </>
    );
  }
}

export default Controls;
