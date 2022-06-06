import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-sky-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl text-sky-600 mt-3 pb-4 text-center">Login</div>
      </div>
      <div className="max-w-md w-full mx-auto bg-white mt-4 border border-sky-800 rounded-3xl h-12 pl-6 pt-3">Username</div>
      <div className="max-w-md w-full mx-auto bg-white mt-4 border border-sky-800 rounded-3xl h-12 pl-6 pt-3">Password</div>
    </div>
  );  
}

export default App;
