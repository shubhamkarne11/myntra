import React, { useCallback, useEffect } from "react";

const Passwordgenerator = () => {
  const [password, setPassword] = React.useState("MyPassword@123");
  const [length, setLength] = React.useState(10);
  const [number, setNumber] = React.useState(false);
  const [special, setSpecial] = React.useState(false);
  const generatePassword = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) {
      str += "0123456789";
    }

    if (special) {
      str += "!@#$%^&*()_+";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  },[number,special,length]);



  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <div className="bg-blue-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 text-black w-134 h-60 p-10 rounded-lg shadow-lg">
          {/* <h1>Password Generator Component</h1> */}
          <h1 className="flex justify-center items-center bg-green-300 rounded-3xl p-2">
            {password}
          </h1>
          <div className="bg-green-200 mt-4 rounded-4xl pl-6 h-28 pt-2">
            <input
              className="mt-4"
              type="range"
              min="5"
              max="50"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="ml-2">{length}</label>
            <br></br>
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={(e) => setNumber(!number)}
            ></input>
            <label>Number Include</label>
            <br></br>
            <input
              type="checkbox"
              defaultChecked={special}
              onChange={(e) => setSpecial(!special)}
            ></input>
            <label>Special Characters Include</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passwordgenerator;
