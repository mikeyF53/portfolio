import React from 'react';

const Main = (props) => {
  const { main } = props
    return (
    <div>
      <div ref={main} className='main-container'>
        <div className='background-img'>
          <div className="cover"></div>
        </div>
        <p className='intro'>
          Born and raised in New York. Former United States Marine. Passionate
          web developer.
        </p>
      </div>
    </div>
  );
};

export default Main;
