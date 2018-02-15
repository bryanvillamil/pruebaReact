import React, { Component } from 'react';



class DeleteRow extends Component {
  render() {
    const { id,handleRemoveTodo } = this.props;

    return (
      <div className="delete" onClick={handleRemoveTodo(id)}>
         X
      </div>
    );
  }
}

export default DeleteRow;