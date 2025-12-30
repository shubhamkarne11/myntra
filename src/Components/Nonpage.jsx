import React, { useState } from 'react';

const Nonpage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
        <div>
          <h1 className='text-[40px]'>
            The count value is: <span className='text-white'>{count}</span>
          </h1>
        </div>
        <div className='flex gap-3 mt-9'>
          <button 
            className='text-[22px] sm:text-[16px] rounded-[70px] bg-amber-200 h-12 w-[140px]' 
            onClick={() => setCount(prevCount => prevCount + 1)}
          >
            Increment
          </button>
          <button 
            className='text-[22px] sm:text-[16px] rounded-[70px] bg-amber-200 h-12 w-[140px]' 
            onClick={() => setCount(prevCount => prevCount - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Nonpage;
