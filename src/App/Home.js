import React, { Component } from 'react';
import StudentList from './components/StudentList';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <StudentList />
      </div>
    );
  }
}

export default Home;
