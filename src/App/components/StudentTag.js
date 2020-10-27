import React from 'react';
import './StudentTag.scss';

const StudentTag = ({ student }) => {
  const display = `${student.id}. ${student.name}`;
  return (
    <div className='tag StudentTag' title={display}>
      {display}
    </div>
  );
};

export default StudentTag;
