import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>

      <div className="nav">
        <Link to="/home">
        <h2 className="nav-title">Wild Pantry</h2>
      </Link>
        <div className='navDiv'>
          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link className="navLink" to="/user">
                Home
              </Link>
              {/* <Link className="navLink" to="/pantry">
                The Pantry
              </Link> */}

{user.clearance > 2 ?
              <Link className="navLink" to="/edibleform">
              Pantry Form
            </Link>:''}


              {/* <Link className="navLink" to="/journal">
                {user.username}'s Journal
              </Link>
              <Link className="navLink" to="/journalform">
                {user.username}'s Journal Entry
              </Link> */}


              {/* <Link className='navLink' to =  "/editpantry/:id">
            Edit Pantry
          </Link> */}

              <LogOutButton className="navLink" />
            </>
          )}

          <Link className="navLink" to="/about">
            About
          </Link>

        </div>

      </div>

    </>
  );
}

export default Nav;
