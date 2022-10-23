import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminContent() {
  return (
    <div className='admin-content'>
      <Outlet />
      </div>
  )
}

export default AdminContent;