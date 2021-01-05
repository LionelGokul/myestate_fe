import React from 'react';

const Loader = () => {
  return (
    <div id="overlay">
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
            <div className="object"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
