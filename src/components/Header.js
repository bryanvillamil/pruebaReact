import React, { Component } from 'react';

import TodoTextField from './TodoTextField';

class Header extends Component {
  render() {
    const { addTodo } = this.props.actions;
    const  tit  = "React Sancrisoft";

    return (
      <div className="header">
        <h2 className="titulo">{tit}</h2>
        <TodoTextField onSubmit={text => addTodo(text)} />
      </div>
    );
  }
}

export default Header;