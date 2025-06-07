import React from 'react'
import Home from './Home'
import Contact from './Contact'
import './PageBody.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Lab1 from './ProjectComponents/Lab1'

const PageBody = ( { pageDisplay } ) => {

    const decidePage = () => {
      console.log(pageDisplay)
      if(pageDisplay === 'Home'){
        return <Home/>
      } else if(pageDisplay === 'Contact'){
        return <Contact/>
    } else if(pageDisplay === 'Lab 1') {
      return <Lab1/>
    }
  }
  
    return (
      <div id='bodyContain'>
        <div id='bodyContent'>
          { decidePage() }
        </div>
      </div>
    )
}

export default PageBody