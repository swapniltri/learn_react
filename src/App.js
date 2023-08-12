import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

const App = () => {

  const [userList, setUserList] = useState([]);

  const addUserDetailsUtil = (userDetails) => {
    setUserList(prev => {
      return [...prev, userDetails];
    });
  }

  return <div>
    <AddUser addUserDetails={addUserDetailsUtil} />
    <UserList userList={userList} />
  </div>
}

export default App;
