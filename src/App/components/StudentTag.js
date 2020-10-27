import React from 'react';
import './StudentTag.scss';

const StudentTag = ({ student: { id, name } }) => {
  const display = `${id}. ${name}`;
  return (
    <div className="tag StudentTag" title={display}>
      {display}
    </div>
  );
};

export default StudentTag;
