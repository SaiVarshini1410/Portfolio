import React from 'react';
import Loader from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className="loader-container" style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'black' 
    }}>
      <img src={Loader} alt="Loading" />
    </div>
  );
};

export default Loading;
