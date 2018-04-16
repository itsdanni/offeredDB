import React from 'react';
import Nav from './Nav';

const Main = (props) => {
  const { children } = props

  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}

export default Main;
