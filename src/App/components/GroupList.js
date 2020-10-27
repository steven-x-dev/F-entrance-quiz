import React, { Component } from 'react';
import Group from './Group';
import './GroupList.scss';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  render() {
    const { groups } = this.state;
    return (
      <div className='GroupList'>
        {groups.length > 0 && groups.map(group => <Group key={group.id} group={group} />)}
      </div>
    );
  }
}

export default GroupList;
