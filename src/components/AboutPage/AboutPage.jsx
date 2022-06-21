import { style } from '@mui/system';
import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div>
      <div className='about'>
        <h1>Technology Used: </h1>
        <ul className='techList'>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Redux</li>
          <li>Redux Saga</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Material UI </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
