import React from 'react';
import './Group.scss';
import StudentTag from './StudentTag';

const Group = ({ group: { id, students } }) => (
  <div className='Group'>
    <div className='group-name'>{`${id} 组`}</div>
    <div className='group-members'>
      {students.map((student) => <StudentTag key={student.id} student={student} />)}
    </div>
  </div>
);

export default Group;
