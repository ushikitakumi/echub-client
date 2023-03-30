import React from 'react';
import SearchBar from './SearchBar';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="navbar-brand me-4">EChub</div>
        <SearchBar handleSubmit={props.handleSubmit}/>
      </div>
    </nav>
  );
};

export default Navbar;
