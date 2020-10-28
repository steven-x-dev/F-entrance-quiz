import React from 'react';
import StudentTag from './StudentTag';
import TagPlaceholder from './TagPlaceholder';
import placeholders from './placeholders';
import './Group.scss';

const Group = ({ group: { id, students } }) => (
  <div className="Group">
    <div className="group-name">{`${id} 组`}</div>
    <div className="group-members">
      {students.map((student) => (
        <StudentTag key={student.id} student={student} />
      ))}
      {placeholders.map((index) => (
        <TagPlaceholder key={index} />
      ))}
    </div>
  </div>
);

export default Group;
