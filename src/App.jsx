import React from 'react'
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftSidebar/LeftBar';
import Mid from './components/mid/mid';

const App = () => {
  return (
    <div style={{background:"rgb(242,242,242)"}}>
      <Navbar/>
      <Mid/>
      
    </div>
  )
}

export default App