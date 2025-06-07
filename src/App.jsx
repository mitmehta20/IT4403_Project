import { useState } from 'react'
import './App.css'
import PageHeader from './Components/PageHeader'
import PageBody from './Components/PageBody/PageBody'

function App() {

  const  [ displayPage, setDisplayPage ] = useState('Home');

  const handleCallBack = (childData) => {
    console.log(childData)
    setDisplayPage(childData)
  }

  return (
    <div className='fullContainer'>
    <div className='headerContainer'><PageHeader parentCallBack={handleCallBack}/></div>
    <div className='bodyContainer'><PageBody pageDisplay={displayPage}/></div>
    </div>
  )
}

export default App
