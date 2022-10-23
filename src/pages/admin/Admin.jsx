import './css/Admin.css'
import React from 'react'
import { Outlet } from 'react-router-dom'


import SideBar from './SideBar'

function Admin() {
  return <>
    <SideBar />
    <div className='admin-content'>
      <Outlet />
    </div>
  </>
}

export default Admin