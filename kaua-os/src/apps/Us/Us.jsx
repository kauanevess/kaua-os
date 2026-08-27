function Us({ onClose }) {
  const momentos = [
  {
    emoji: '🎮',
    titulo: 'um valorant aleatório',
    texto: 'engraçado pensar que tudo começou num valorant KKKKKKK eu só fui jogar e do nada conheci vc',
  },
  {
    emoji: '💬',
    titulo: 'começamos a conversar',
    texto: 'ai a gente foi conversando cada vez mais e quando eu percebi já queria falar com vc todo dia',
  },
  {
    emoji: '🤨',
    titulo: 'acho que eu gostei de vc',
    texto: 'não sei nem dizer quando aconteceu direito KKKKK só sei que em algum momento vc deixou de ser só uma pessoa que eu conheci no valorant',
  },
  {
    emoji: '❤️',
    titulo: 'virou nós dois',
    texto: 'e olha onde a gente foi parar né KKKKK sinceramente eu não esperava nada disso quando te conheci, mas ainda bem que aconteceu',
  },
  {
    emoji: '🫂',
    titulo: 'finalmente com vc',
    texto: 'depois de tanta call e tanta vontade de te ver, finalmente poder te abraçar de verdade foi uma sensação que eu nunca vou esquecer',
  },
  {
    emoji: '♾️',
    titulo: 'e agora?',
    texto: 'agora a gente continua né momozi KKKKK ainda tem muita coisa pra gente viver junto',
  },
]

  return (
    <div className="us-app">

      <div className="us-header">
        <button onClick={onClose}>‹</button>
        <span>nós</span>
        <div></div>
      </div>

      <div className="us-intro">
        <h1>eu + vc ❤️</h1>
        <p>um resuminho de como fomos parar aqui</p>
      </div>

      <div className="timeline">
        {momentos.map((momento, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-left">
              <div className="timeline-icon">
                {momento.emoji}
              </div>

              {index !== momentos.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>

            <div className="timeline-content">
              <h3>{momento.titulo}</h3>
              <p>{momento.texto}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Us