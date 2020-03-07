import React from 'react';

const Loader = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.text}</div>
    </div>
  );
};

Loader.defaultProps = {
  text: 'Loading.. Please wait'
};

export default Loader;
