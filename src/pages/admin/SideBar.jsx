import './css/SideBar.css'
import React from 'react'
import {Link} from 'react-router-dom'


function SideBar() {
  return (
    <div>
      <ul className='side-bar'>
        <li><Link to="/admin">Home</Link></li>
        <li><Link to="/admin/projects">Projects</Link></li>
        <li><Link to="/admin/skills">Skills</Link></li>
        <li><Link to="/admin/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default SideBar;