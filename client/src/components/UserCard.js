import React from 'react';

const UserCard = ({user}) => {
  return (
    <div>
    <p>{user.attributes.name}</p>
    <p>{user.attributes.email}</p>
    <p>{user.attributes.sale}</p>
  )
}

export default UserCard
