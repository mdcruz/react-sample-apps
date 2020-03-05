import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Search from './components/Search';
import Images from './components/Images';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <Header title="ReactSplash" />
        <Search />
        <div className="five column row">
          <Images />
          <Images />
          <Images />
          <Images />
          <Images />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
