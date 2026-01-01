import './App.css'
import Mainpage from './Components/Mainpage'
import Navbar from './Components/Navbar'
import Nonpage from './Components/Nonpage'
import Bgchanger from './Components/Bgchanger'
import React from 'react'
import Passwordgenerator from './Components/Passwordgenerator'
import Githubview from './Components/Githubview'

function App() {
// const[count ,setCount] = React.useState(0);
  return (
    <>
      <div>
        {/* <h1>Counter</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h2>{count}</h2> */}
        {/* <Nonpage /> */}
         {/* <Navbar />
        <Mainpage /> */}
        {/* <Bgchanger name={count}/> */}
        {/* <Passwordgenerator /> */}
        <Githubview />
      </div>
    </>
  )
}

export default App