import React from 'react';

const Header = props => {
  return (
    <div className="one column row">
      <h1 className="column ui header">{props.title}</h1>
      <h2 class="column ui sub header">
        <i class="camera retro icon"></i>
        The internet’s source of freely usable images. Powered by creators
        everywhere
      </h2>
    </div>
  );
};

export default Header;
