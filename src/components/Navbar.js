import React from 'react';
import SearchBar from './SearchBar';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" >EChub</div>
      <SearchBar handleSubmit={props.handleSubmit}/>
    </nav>
  );
};

export default Navbar;
