import React from 'react';
import Group from './Group';
import './GroupList.scss';

const GroupList = ({ groups }) => (
  <div className='GroupList'>
    {groups.length > 0 && groups.map(group => <Group key={group.id} group={group} />)}
  </div>
);

export default GroupList;
