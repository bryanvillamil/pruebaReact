import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

class TodoActions extends Component {
  render() {
    const {
      todos,
      currentFilter,
      handleFilter,
      handleRemoveCompleted,
      handleCompleteAll,
    } = this.props;

    return (
      <div className="footer__bottom" style={styles.container}>
        <RadioButtonGroup
          className="footer__bottom-info"
          name="filter"
          defaultSelected={currentFilter}
          onChange={(e, value) => handleFilter(value)}
          style={styles.radioButtonGroup}
        >
          <RadioButton
            label="All"
            value="all"
            style={styles.radioButton}
          />
          <RadioButton
            label="Active"
            value="active"
            style={styles.radioButton}
          />
          <RadioButton
            label="Completed"
            value="completed"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
        <div className="footer__bottom-button">
            <div className="btn remove" onTouchTap={handleRemoveCompleted}>
                <FontIcon
                  className="material-icons"
                  color="#fff"
                >
                  clear
                </FontIcon>
            </div>

            <div className="btn select" onTouchTap={handleCompleteAll}>
                <FontIcon
                  className="material-icons"
                  color="#fff"
                >
                done_all
                </FontIcon>
            </div>
          </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  radioButtonGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  radioButton: {
    width: 100,
    marginRight: 10,
  },
};

export default TodoActions;