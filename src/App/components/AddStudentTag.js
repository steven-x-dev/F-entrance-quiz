import React, { Component } from 'react';
import './AddStudentTag.scss';
import { baseURL } from '../../server';

class AddStudentTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entering: false,
      submitting: false,
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

  restoreInput = () => {
    this.setState({
      entering: false,
      submitting: false,
      name: '',
    });
  };

  addNewStudent = () => {
    const { name } = this.state;
    if (name.length === 0) return;
    this.setState({
      submitting: true,
    });
    fetch(`${baseURL}/student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(() => this.props.notifyRefresh(this.restoreInput))
      .catch(() => this.restoreInput());
  };

  render() {
    const { entering, submitting, name } = this.state;
    return (
      <div className="tag AddStudentTag">
        {entering ? (
          <input
            type="text"
            name="name"
            value={name}
            onChange={submitting ? null : this.handleNameChange}
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
