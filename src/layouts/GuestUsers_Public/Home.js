import React from 'react'
import Header from '../../components/Header'
import Body from '../../components/Body'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Outlet/>
        <Header/><br/>
        <Body/>
    </div>
  )
}

export default Home