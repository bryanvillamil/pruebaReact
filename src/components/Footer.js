import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import TodoActions from './TodoActions';

const Footer = ({ todos, currentFilter, handleFilter, handleRemoveCompleted, handleCompleteAll }) => {

// Se agrega contador para saber numero de item agregados
const leftTodos = todos.reduce((count, { completed }) => completed ? count : count + 1, 0);


  return (
    <div className="footer">
      <div className="footer__line" style={styles.container}>
        <span className="footer__line-num" style={styles.itemsCount}>
            {leftTodos} item added

            <IconButton>
                <FontIcon
                    className="material-icons"
                    color="#000">
                    face
                </FontIcon>
            </IconButton>

        </span>
        <TodoActions
          currentFilter={currentFilter}
          handleFilter={handleFilter}
          handleRemoveCompleted={handleRemoveCompleted}
          handleCompleteAll={handleCompleteAll}
        />
      </div>
    </div>
  );
};


const styles = {
  divider: {
    marginBottom: 25,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  itemsCount: {
    alignSelf: 'center',
    marginRight: 10,
  },
};

export default Footer;