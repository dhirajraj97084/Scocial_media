import React from 'react'
import Layout from '../../component/layout/Layout'
import SubTopbar from '../../component/sub_topbar/SubTopbar'
import StatusBar from '../../component/statusBar/StatusBar'

function Home() {
  return (
    <Layout>
      <SubTopbar/>
      <StatusBar/>
    </Layout>
  )
}

export default Home
