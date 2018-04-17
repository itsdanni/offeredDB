/**
 * Home page/Landing page
 */
import React from 'react';
//import { Companies, Search } from '../components';
import Companies from './Companies';
import Search from './Search';

const Home = (props) => {
  return (
    <div>
      <Search />
      <Companies />
    </div>
  )
}
export default Home;
