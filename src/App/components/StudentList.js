import React, { Component } from 'react';
import { baseURL } from '../../server';
import StudentTag from './StudentTag';
import AddStudentTag from './AddStudentTag';
import TagPlaceholder from './TagPlaceholder';
import placeholders from './placeholders';
import './StudentList.scss';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.refreshStudentList();
  }

  refreshStudentList = (onAddStudentFinishedCallback) => {
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
        this.setState(
          {
            students,
          },
          () => {
            if (onAddStudentFinishedCallback) {
              onAddStudentFinishedCallback();
            }
          }
        );
      })
      .catch(() => {
        if (onAddStudentFinishedCallback) {
          onAddStudentFinishedCallback();
        }
      });
  };

  render() {
    const { students } = this.state;
    return (
      <section className='StudentList'>
        <div className='title'>
          <h3 className='title-text'>学员列表</h3>
        </div>
        <div className='student-list'>
          {students.map((student) => (
            <StudentTag key={student.id} student={student} />
          ))}
          <AddStudentTag notifyRefresh={this.refreshStudentList} />
          {placeholders.map((index) => (
            <TagPlaceholder key={index} />
          ))}
        </div>
      </section>
    );
  }
}

export default StudentList;
