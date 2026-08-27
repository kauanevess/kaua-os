import { useState } from 'react'

function Photos({ onClose }) {
  const [fotoAberta, setFotoAberta] = useState(null)

const photos = [
  {
    src: '/foto1.jpg',
    legenda: 'essa é muito a nossa cara KKKKKKK te amo momozi',
  },
  {
    src: '/foto2.jpg',
    legenda: 'essa daqui ficou muito bonita, sério',
  },
  {
    src: '/foto3.jpg',
    legenda: 'a gente muito lindinho aqui, gosto demais dessa foto',
  },
  {
    src: '/foto4.jpg',
    legenda: 'eu amo muito o jeito que a gente tá se olhando nessa',
  },
  {
    src: '/foto5.jpg',
    legenda: 'essa aqui me quebra KKKKKKK dois bobos',
  },
  {
    src: '/foto6.jpg',
    legenda: 'queria voltar pra esse dia com você',
  },
]

  if (fotoAberta) {
    return (
      <div className="photo-viewer">
        <div className="photo-viewer-header">
          <button onClick={() => setFotoAberta(null)}>‹</button>
          <span>foto</span>
          <div></div>
        </div>

        <div className="photo-viewer-content">
          <img
            src={fotoAberta.src}
            alt="memória"
          />

          <p>{fotoAberta.legenda}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="photos-app">

      <div className="photos-header">
        <button onClick={onClose}>‹</button>

        <h2>fotos</h2>

        <div className="photos-space"></div>
      </div>

      <div className="photos-title">
        <h1>nós ❤️</h1>
        <p>algumas das minhas favoritas</p>
      </div>

      <div className="photos-grid">
        {photos.map((photo, index) => (
          <div
            className="photo-card"
            key={index}
            onClick={() => setFotoAberta(photo)}
          >
            <img
              src={photo.src}
              alt={`foto ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Photos