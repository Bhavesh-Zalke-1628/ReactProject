import { useState } from 'react'
import './App.css'
import Card from './Component/props/card'
import Bgapp from './Component/BgChanger/BgApp'
import PassApp from './Component/passWord Generator/PassApp'
import CurrnacyApp from './Component/currancy/currnacyApp'
import RouterApp from './Component/Router/RouterApp.jsx'
import ContextApp from './Component/ContextApi/ContextApp.jsx'
import TheamApp from './Component/TheamSwitecher/TheamApp.jsx'
function App() {
  return (
    <>
      <TheamApp />
    </>
  )
}

export default App
