import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [hidden, setHidden] = useState(false);
  const handleClick = () => setHidden(true);

  return (
    <div>
      <h1>hello ssr and react</h1>
      <div className='grid grid-cols-6 md:grid-cols-8 xl:grid-cols-12'>
        <div className='col-span-6 md:col-span-4 xl:col-span-4'>A</div>
        <div className='col-span-6 md:col-span-4 xl:col-span-4'>B</div>
        <div className='col-span-6 md:col-span-4 xl:col-span-4'>C</div>
        <div className='col-span-6 md:col-span-4 xl:col-span-4'>D</div>
        <div className='col-span-6 md:col-span-4 xl:col-span-4'>E</div>
        <div className='col-span-6 md:col-span-4 xl:col-span-4'>F</div>
      </div>
      <button onClick={handleClick}>show hidden content</button>
      {hidden && <p>"I am hidden"</p>}
    </div>
  );
}
