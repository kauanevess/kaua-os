import { useState } from 'react'

function Surprise({ onClose }) {
  const [aberto, setAberto] = useState(false)

  if (aberto) {
    return (
      <div className="surprise-document">

        <div className="surprise-document-header">
          <button onClick={() => setAberto(false)}>‹</button>

          <span>pra momozi ❤️</span>

          <a
            href="/surpresa.pdf"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </div>

        <iframe
          className="pdf-viewer"
          src="/surpresa.pdf"
          title="surpresa para giovanna"
        />

      </div>
    )
  }

  return (
    <div className="surprise-app">

      <div className="surprise-header">
        <button onClick={onClose}>‹</button>

        <span>surpresa</span>

        <div></div>
      </div>

      <div className="surprise-start">

        <div className="gift-icon">
          🎁
        </div>

        <h1>achei que tinha acabado?</h1>

        <p>
          ainda faltava uma coisinha
        </p>

        <button
          className="open-gift-button"
          onClick={() => setAberto(true)}
        >
          abrir
        </button>

      </div>

    </div>
  )
}

export default Surprise