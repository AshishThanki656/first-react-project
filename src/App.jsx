import React from 'react'
import IDCard from './Components/IDCard';

function App() {
  return (
    <div>

      <IDCard name="rogers" role = "captain" age={100}/>
      <IDCard name="stark" role = "engineer" age={45}/>
      <IDCard name="banner" role = "scientist" age={50}/>

    </div>
  )
}

export default App