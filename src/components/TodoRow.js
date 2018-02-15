import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from './subComponents/CheckBox';
import DeleteRow from './subComponents/DeleteRow';


class TodoRow extends Component {
  render() {
    const { todo, handleRemoveTodo, handleCompleteTodo } = this.props;
    return (
        <li className="item">
            <Checkbox
              handleCompleteTodo={handleCompleteTodo}
              check={todo.completed}
              id={todo.id}
            />
            {todo.completed ? <p className='completed'>{todo.text}</p> : <p>{todo.text}</p>}


            {todo.completed ? <span className='listo'>Completo </span> : <span></span>}
            <DeleteRow
              handleRemoveTodo={handleRemoveTodo}
              id={todo.id}
            />
        </li>
    );
  }
}

const styles = {
  completed: {
    color: 'gray',
    textDecoration: 'line-through',
  },
};

export default TodoRow;