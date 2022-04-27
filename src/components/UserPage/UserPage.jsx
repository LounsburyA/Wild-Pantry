import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const toPantry = () => {
    history.push('/pantry')
  }
  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
        <div> <button onClick={toPantry} className='btn'>The Pantry</button></div>
      </div>
      
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
