import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ComponentStyle.css'

const Home = () => {
  return (
    <div className='centerContainer text-bg-secondary p-3'>
      <h1>Welcome to My Page!</h1>
      <h3>About Me</h3>
      <p>Hi everyone! my name is Mit Mehta and I am a senior here at Kennesaw State pursuing my Bachelors in Information Technology. I was introduced to coding in High School when I took my Intro to Programming class and fell in love with it instantly. Outside of school, I enjoy listening to music, playing video games, and playing sports.</p>
      <h3>Purpose</h3>
      <p>This page is a project I made to showcase my skills in Web Development. I hope you enjoy it!</p>
      <h3>Course Information</h3>
      <p>This course covers advanced topics in the field of web and mobile development. We will use modern technologies to create projects, including a end of semester term project. This will cover mostly client-side development tactics and practices.</p>
      <p>Click <a href='https://ccse.kennesaw.edu/it/' target='_blank' style={{color:'white'}}><b>here</b></a> to access the Kennesaw State CCSE Website</p>
    </div>
  )
}

export default Home