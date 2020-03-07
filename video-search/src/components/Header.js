import React from 'react';

const Header = props => {
  return (
    <div className="one column row">
      <h1 className="column ui header">ReactTube</h1>
      <h2 className="column ui sub header">
        <i className="film icon"></i>
        The internet’s source of amazing videos
      </h2>
    </div>
  );
};

export default Header;
