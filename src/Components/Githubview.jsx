import React, { useState, useEffect } from "react";

const Githubview = () => {
  const [profile, setProfile] = useState([]);
  const[number,setNumber]=useState("");
  const[user,setUser]=useState("");

  async function profilefetcher(count) {
    let ran = Math.floor(Math.random() * 10000);
    const data = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
    const response = await data.json();
    setProfile(response);
  }

  async function Specificuser(username) {
    const data = await fetch(`https://api.github.com/users/${username}`);
    const response = await data.json();
    setProfile([response]);
  }

  useEffect(() => {
    profilefetcher(10);
  }, []);
  
  return (
    <>
      <h1 className="bg-blue-200 items-center justify-center flex text-[40px] font-bold">
        Github Profile Viewer
      </h1>
      <div className="flex justify-center items-center p-2 bg-[#a7a7ff]">
        <input type="text" placeholder="Search No of User" className="border-2 border-black ml-5 p-2 rounded-lg w-60 bg-white" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button className="bg-blue-500 text-white p-2 ml-2 rounded-lg" onClick={()=>profilefetcher(Number(number))}>Search</button>

         <input type="text" placeholder="Search For Specific User" className="border-2 border-black ml-5 p-2 rounded-lg w-60 bg-white" value={user} onChange={(e)=>setUser(e.target.value)} />
        <button className="bg-blue-500 text-white p-2 ml-2 rounded-lg" onClick={()=>Specificuser(user)}>Search</button>
      </div>
      <div className="bg-green-300 h-full grid grid-cols-4 gap-4 p-5">
        {profile.map((item) => {
          return <div key={item.id} className="border-2 border-black flex flex-col justify-center items-center">
            <img src={item.avatar_url} className="rounded-[50%] h-40 w-40"></img>
            <h2 className="font-bold">{item.login}</h2>
            <a className='bg-amber-200 rounded-2xl w-15 flex justify-center items-center' href={item.html_url} target="_blank">profile</a>
          </div>;
        })}
      </div>
    </>
  );
};

export default Githubview;
