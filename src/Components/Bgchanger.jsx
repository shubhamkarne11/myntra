import React, {useEffect, useState } from 'react';

const Bgchanger = ({name}) => {
  const [color, setColor] = useState("gray");
  console.log("render");
  useEffect(()=>{
    console.log("useEffect");
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      {console.log("hello first")}
      {console.log(name)}
      <div className="flex flex-col justify-center items-center h-screen">
        <div className='flex mx-auto justify-center items-center bg-white h-50 w-100 gap-3'>
          {console.log("inside div")}
          <button className='bg-red-500 rounded-sm h-auto w-16' onClick={()=>setColor("red")}>Red</button>
          <button className='bg-blue-400 rounded-sm h-auto w-16' onClick={()=>setColor("blue")}>Blue</button>
          <button className='bg-green-400 rounded-sm h-auto w-16' onClick={()=>setColor("green")}>Green</button>
          <button className='bg-yellow-300 rounded-sm h-auto w-16' onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='bg-pink-300 rounded-sm h-auto w-16' onClick={()=>setColor("pink")}>Pink</button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Bgchanger);
