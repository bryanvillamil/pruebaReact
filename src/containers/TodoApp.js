import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import * as todoActions from '../actions/todos';

import Header from '../components/Header';
import TodoList from '../components/TodoList';

const TodoApp = ({todos, actions}) => (
  <MuiThemeProvider>
    <div className="container" style={styles.container}>
      <div
        className="box-caja"
        zDepth={2}
        style={styles.paper}
      >
        <Header actions={actions} />
        <TodoList
          todos={todos}
          actions={actions}
        />
      </div>
    </div>
  </MuiThemeProvider>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);
