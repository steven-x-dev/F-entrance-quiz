import React, { Component } from 'react';
import GroupList from './GroupList';
import './Groups.scss';
import { baseURL } from '../../server';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickable: false,
      groups: [],
    };
  }

  componentDidMount() {
    fetch(`${baseURL}/groups`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            clickable: true,
          });
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((groups) => {
        this.setState({ groups });
      })
      .catch(() => {
        this.setState({
          clickable: true,
        });
      });
  }

  handleShuffle = () => {
    if (!this.state.clickable) return;
    this.setState({
      clickable: false,
    });
    fetch(`${baseURL}/groups`, {
      method: 'PATCH',
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            clickable: true,
          });
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((groups) => {
        this.setState({ groups });
      })
      .catch(() => {
        this.setState({
          clickable: true,
        });
      });
  };

  render() {
    const { clickable, groups } = this.state;
    return (
      <section className="Groups">
        <div className="title">
          <h3 className="title-text">分组列表</h3>
          <div
            role="button"
            tabIndex={0}
            className={`btn ${clickable ? 'btn-active' : ''} group-btn`}
            onClick={this.handleShuffle}
            onKeyDown={this.handleShuffle}
          >
            分组学员
          </div>
        </div>
        <GroupList groups={groups} />
      </section>
    );
  }
}

export default Groups;
