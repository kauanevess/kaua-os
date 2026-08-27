import { useState } from 'react'
import './App.css'
import LockScreen from './screens/LockScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  const [bloqueado, setBloqueado] = useState(true)

  function desbloquear() {
    setBloqueado(false)
  }

  return (
    <>
      {bloqueado ? (
        <LockScreen onUnlock={desbloquear} />
      ) : (
        <HomeScreen />
      )}
    </>
  )
}

export default App