import React, { Component } from 'react';
import StudentList from './components/StudentList';
import Groups from './components/Groups';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        {/*TODO GTB-工程实践: - 命名要统一，比如都为GroupList，StudentList*/}
        <Groups />
        <StudentList />
      </div>
    );
  }
}

export default Home;
