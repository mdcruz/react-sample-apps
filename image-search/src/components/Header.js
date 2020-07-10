import React from 'react';

const Header = (props) => {
  return (
    <div className="one column row">
      <h1 className="column ui header">{props.title}</h1>
      <h2 className="column ui sub header">
        The internet’s source of freely usable images. Well, powered by unsplash
        API...
      </h2>
    </div>
  );
};

export default Header;
