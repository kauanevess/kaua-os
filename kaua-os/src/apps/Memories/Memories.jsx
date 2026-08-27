import { useState } from 'react'

function Memories({ onClose }) {
  const [memoriaAberta, setMemoriaAberta] = useState(null)

  const memorias = [
    {
      data: '21/01/2026',
      titulo: 'sebollas',
      foto: '/memoria1.jpg',
      texto: 'o dia de sebollas (impossível de esquecer)',
    },
    {
      data: '15/05/2026',
      titulo: 'o pedido de namoro',
      foto: '/memoria2.jpg',
      texto: 'o dia que a mulher da minha vida me disse o primeiro sim',
    },
    {
      data: '17/04/2026',
      titulo: 'a primeira vez que eu te vi',
      foto: '/memoria3.jpg',
      texto: 'eu lembro até hoje da sensação de finalmente olhar pra vc sem ser por uma tela',
    },
    {
      data: '22/07/2026',
      titulo: 'nosso primeiro date',
      foto: '/memoria4.jpg',
      texto: 'eu tava feliz pra krl nesse dia e essa foto sempre me faz lembrar disso',
    },
    {
      data: '16/07/2026',
      titulo: 'um dia que eu gosto muito',
      foto: '/memoria5.jpg',
      texto: 'não aconteceu nada absurdo, eu só gosto muito de lembrar desse dia com vc',
    },
    {
      data: '27/08/2026',
      titulo: 'hoje',
      foto: '/memoria6.jpg',
      texto: 'e ainda tem um monte de data que nem existe aqui ainda ❤️',
    },
  ]

  if (memoriaAberta) {
    return (
      <div className="memory-view">
        <div className="memory-header">
          <button onClick={() => setMemoriaAberta(null)}>‹</button>
          <span>memória</span>
          <div></div>
        </div>

        <div className="memory-content">
          <div className="memory-full-image">
            <img
              src={memoriaAberta.foto}
              alt={memoriaAberta.titulo}
            />
          </div>

          <div className="memory-text">
            <span className="memory-date">
              {memoriaAberta.data}
            </span>

            <h1>{memoriaAberta.titulo}</h1>

            <p>{memoriaAberta.texto}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="memories-app">
      <div className="memories-header">
        <button onClick={onClose}>‹</button>
        <span>memórias</span>
        <div></div>
      </div>

      <div className="memories-title">
        <h1>coisas que eu guardei</h1>
        <p>e que eu não qro esquecer</p>
      </div>

      <div className="memories-list">
        {memorias.map((memoria, index) => (
          <div
            className="memory-card"
            key={index}
            onClick={() => setMemoriaAberta(memoria)}
          >
            <div className="memory-card-info">
              <span>{memoria.data}</span>
              <h3>{memoria.titulo}</h3>
            </div>

            <span className="memory-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Memories