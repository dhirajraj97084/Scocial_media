import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'

function Layout({children}) {
  return (
    <div>
        <Topbar/>
        <Sidebar/>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default Layout
