import React, { Component } from 'react';
import './Groups.scss';

class Groups extends Component {
  render() {
    return (
      <div className='Groups'>
        <div className='title'>
          <h3 className='title-text'>分组列表</h3>
          <div className='btn group-btn'>分组学员</div>
        </div>
      </div>
    );
  }
}

export default Groups;
