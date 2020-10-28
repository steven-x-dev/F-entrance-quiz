import React, { Component } from 'react';
import './AddStudentTag.scss';

class AddStudentTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entering: false,
      name: '',
    };
  }

  handleClick = () => {
    this.setState(
      {
        entering: true,
      },
      () => {
        this.input.focus();
      }
    );
  };

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  };

  handleBlur = () => {
    const { name } = this.state;
    if (name.length === 0) {
      this.setState({
        entering: false,
      });
    }
  };

  handleEnter = ({ keyCode }) => {
    if (keyCode === 13) {
      this.addNewStudent();
    }
  };

  addNewStudent = () => {
    const { name } = this.state;
    if (name.length === 0) return;
    console.log(name);
  };

  render() {
    const { entering, name } = this.state;
    return (
      <div className="tag AddStudentTag">
        {entering ? (
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleNameChange}
            onKeyDown={this.handleEnter}
            onBlur={this.handleBlur}
            ref={(input) => {
              this.input = input;
            }}
          />
        ) : (
          <div
            className="btn-add-student"
            role="button"
            tabIndex={0}
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
          >
            + 添加学员
          </div>
        )}
      </div>
    );
  }
}

export default AddStudentTag;
