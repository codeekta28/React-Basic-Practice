import React from 'react';

function Avatar(props) {
    const {user}=props
  return <div className='avatar'>
      <img src={user.avatarUrl} alt={user.name} />
  </div>;
}

export default Avatar;
