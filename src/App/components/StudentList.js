import React, { Component } from 'react';
import { baseURL } from '../../server';
import StudentTag from './StudentTag';
import './StudentList.scss';
import TagPlaceholder from './TagPlaceholder';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    fetch(`${baseURL}/students`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((students) => {
        this.setState({ students });
      })
      .catch(() => {});
  }

  render() {
    const { students } = this.state;
    const placeholders = [];
    for (let i = 0; i < Math.max(students.length, 20); i += 1) {
      placeholders.push(i);
    }
    return (
      <div className='StudentList'>
        <div className='title'>
          <h3 className='title-text'>学员列表</h3>
        </div>
        <div className='student-list'>
          {students.map((student) => (
            <StudentTag key={student.id} student={student} />
          ))}
          {placeholders.map((index) => (
            <TagPlaceholder key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
