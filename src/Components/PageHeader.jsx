import React, { useState } from 'react'
import './PageHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const PageHeader = ({ parentCallBack }) => {

  const [ projects, setProjects ] = useState(['Welcome'])

    const onTrigger = (event) => {
        console.log(event)
        parentCallBack(event.target.firstChild.data)
      };

      const getProjects = () => {
        //build a list of projects
        const listProjects = projects.map((project) => 
          <li><a className="dropdown-item" href="#" onClick={onTrigger}>{project}</a></li>
        )
        return listProjects;
      }

  return (
    //return a div with a class of page header with nav components
    <div className="page-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='headerNav'>
      <a className="navbar-brand" href="#" id='navbar-brand-title'>IT4403</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li><a className="navbar-brand" href="#" id="navbar-nav-list-custom-links" onClick={onTrigger}>Home</a></li>
          <li className="nav-item dropdown">
          <a className="navbar-brand" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="navbar-nav-list-custom-links">
            Projects
          </a>
          <ul className="dropdown-menu">
            {getProjects()}
          </ul>
        </li>
          <li><a className="navbar-brand" href="#" id="navbar-nav-list-custom-links" onClick={onTrigger}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default PageHeader