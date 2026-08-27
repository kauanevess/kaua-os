import { useEffect, useState } from 'react'

function LockScreen({ onUnlock }) {
  const [agora, setAgora] = useState(new Date())

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAgora(new Date())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  const hora = agora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const data = agora.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="lock-screen">
      <div className="lock-time">{hora}</div>

      <div className="lock-date">
        {data}
      </div>

      <div className="lock-icon">
        🔒
      </div>

      <button className="unlock-button" onClick={onUnlock}>
        deslize para abrir
      </button>
    </div>
  )
}

export default LockScreen