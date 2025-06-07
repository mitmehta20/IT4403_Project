import React from 'react'
import Home from './Home'
import Contact from './Contact'
import './PageBody.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const PageBody = ( { pageDisplay } ) => {

    const decidePage = () => {
      console.log(pageDisplay)
      if(pageDisplay === 'Home'){
        return <Home/>
      } else if(pageDisplay === 'Contact'){
        return <Contact/>
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