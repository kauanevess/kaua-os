import { useState } from 'react'

function Notes({ onClose }) {
  const [notaAberta, setNotaAberta] = useState(null)

  const notas = [
  {
    titulo: 'coisas suas que eu gosto',
    texto: 'eu gosto do seu jeitinho, de quando vc fica toda animada falando de alguma coisa, da sua voz, do seu sorriso, de quando vc me chama de linduco e até das suas manias que as vezes me deixam doido KKKKKKK. tem um monte de coisinha sua que eu fui percebendo com o tempo e hoje eu simplesmente amo.',
  },
  {
    titulo: 'saudade',
    texto: 'odeio a distância, sério. tem dia que tudo que eu queria era poder aparecer ai, te abraçar e ficar com vc sem precisar olhar hora, passagem ou pensar em quando a gente vai se ver de novo. ainda bem que vc vale cada km.',
  },
  {
    titulo: 'uma coisa meio doida',
    texto: 'as vezes eu paro pra pensar que eu te conheci por causa de um jogo KKKKKKK. tipo, de todas as pessoas que eu poderia ter encontrado, eu fui encontrar justamente vc. ainda bem que eu entrei naquele valorant.',
  },
  {
    titulo: 'pra vc não esquecer',
    texto: 'eu te amo momozi. não só quando ta tudo bonitinho entre a gente, mas nos dias normais também, quando a gente ta falando besteira, jogando, vendo alguma coisa ou simplesmente ficando em call sem fazer nada. eu gosto de ter vc na minha vida, é isso.',
  },
]

  if (notaAberta) {
    return (
      <div className="note-view">
        <div className="note-header">
          <button onClick={() => setNotaAberta(null)}>‹</button>
          <span>notas</span>
          <div></div>
        </div>

        <div className="note-content">
          <h1>{notaAberta.titulo}</h1>
          <p>{notaAberta.texto}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="notes-app">
      <div className="notes-header">
        <button onClick={onClose}>‹</button>
        <h2>notas</h2>
        <div></div>
      </div>

      <div className="notes-list">
        {notas.map((nota, index) => (
          <div
            className="note-card"
            key={index}
            onClick={() => setNotaAberta(nota)}
          >
            <h3>{nota.titulo}</h3>
            <p>{nota.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes