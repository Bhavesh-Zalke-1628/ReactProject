import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function ContextApp() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    )
}

export default ContextApp