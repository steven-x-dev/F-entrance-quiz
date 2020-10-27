import React, { Component } from 'react';
import StudentList from './components/StudentList';
import Groups from './components/Groups';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Groups />
        <StudentList />
      </div>
    );
  }
}

export default Home;
