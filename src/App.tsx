// import { useState } from 'react'

import './App.css'
import { Button } from './components/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>My React App</h1>
      <div className="card">
        {"Profile"} 
        <Button title="signout" disabled onClick={()=> alert("signout")}/>
        
      </div>
      <div className="card">
      {"Homescreen"} 
        <Button title="Register" objArray={[{id:"", title:""}]} onClick={()=> alert("register")}/>
        
      </div>
      
    </>
  )
}

export default App
