import { useState } from 'react'
import Messages from '../apps/Messages/Messages'
import Photos from '../apps/Photos/Photos'
import Music from '../apps/Music/Music'
import Notes from '../apps/Notes/Notes'
import Us from '../apps/Us/Us'
import Memories from '../apps/Memories/Memories'
import Surprise from '../apps/Surprise/Surprise'

function HomeScreen() {
  const [appAberto, setAppAberto] = useState(null)

  const apps = [
    { name: 'mensagens', icon: '💬' },
    { name: 'fotos', icon: '📸' },
    { name: 'música', icon: '🎵' },
    { name: 'notas', icon: '📝' },
    { name: 'nós', icon: '❤️' },
    { name: 'memórias', icon: '📅' },
    { name: 'surpresa', icon: '🎁' },
  ]

  if (appAberto === 'mensagens') {
    return (
      <Messages
        onClose={() => setAppAberto(null)}
      />
    )
  }

  if (appAberto === 'fotos') {
    return (
      <Photos
        onClose={() => setAppAberto(null)}
      />
    )
  }

  if (appAberto === 'música') {
    return (
      <Music
        onClose={() => setAppAberto(null)}
      />
    )
  }

  if (appAberto === 'notas') {
    return (
      <Notes
        onClose={() => setAppAberto(null)}
      />
    )
  }

  if (appAberto === 'nós') {
    return (
      <Us
        onClose={() => setAppAberto(null)}
      />
    )
  }

  if (appAberto === 'memórias') {
    return (
      <Memories
        onClose={() => setAppAberto(null)}
      />
    )
  }

  if (appAberto === 'surpresa') {
    return (
      <Surprise
        onClose={() => setAppAberto(null)}
      />
    )
  }

  return (
    <div className="home-screen">

      <div className="status-bar">
        <span>14:30</span>
        <span>📶 Wi-Fi 🔋</span>
      </div>

      <div className="home-title">
        <h2>KauaOS</h2>
        <p>bem-vinda ❤️</p>
      </div>

      <div className="apps-grid">
        {apps.map((app) => (
          <div
            className="app-item"
            key={app.name}
            onClick={() => setAppAberto(app.name)}
          >
            <div className="app-icon">
              {app.icon}
            </div>

            <span>
              {app.name}
            </span>
          </div>
        ))}
      </div>

      <div className="page-indicator">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>

      <div className="dock">

        <div
          className="dock-icon"
          onClick={() => setAppAberto('mensagens')}
        >
          💬
        </div>

        <div
          className="dock-icon"
          onClick={() => setAppAberto('fotos')}
        >
          📸
        </div>

        <div
          className="dock-icon"
          onClick={() => setAppAberto('nós')}
        >
          ❤️
        </div>

      </div>

    </div>
  )
}

export default HomeScreen