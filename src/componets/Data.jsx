import React, { Component } from "react";
import Card from "./Card";
import Controls from "./Controls";

class Data extends Component {
  render() {
    const { data, onSearch, onTempInput, getFilterdList } = this.props;

    return (
      <>
        <Controls
          onSearch={onSearch}
          onTempInput={onTempInput}
          getFilterdList={getFilterdList}
        />
        {/* map over data and take item and id 
      pass overe the mechanism and item to the childs*/}

        {data.map((item, index) => {
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
