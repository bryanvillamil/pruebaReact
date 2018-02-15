import React, { Component } from 'react';


class CheckBox extends Component {
  render() {
    const { id,check,handleCompleteTodo } = this.props;

    return (
      <input
        className="inputText"
        type="checkbox"
        onClick={handleCompleteTodo(id)}
        checked={check ? true : false}
        />
    );
  }
}

export default CheckBox;