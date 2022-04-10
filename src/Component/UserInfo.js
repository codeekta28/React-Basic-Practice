import React from 'react';
import Avatar from './Avatar';

function UserInfo(props) {
    const {user}=props
  return <div className='userInfo'>
      <Avatar  user={user}/>
      <div className="userName">
          <h4>Hello,{user.name}</h4>
      </div>

  </div>;
}

export default UserInfo;
