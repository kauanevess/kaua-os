import { useEffect, useRef, useState } from 'react'

function Music({ onClose }) {
  const audioRef = useRef(null)
  const [tocando, setTocando] = useState(false)
  const [tempoAtual, setTempoAtual] = useState(0)
  const [duracao, setDuracao] = useState(0)

  function toggleMusic() {
    const audio = audioRef.current

    if (!audio) return

    if (audio.paused) {
      audio.play()
      setTocando(true)
    } else {
      audio.pause()
      setTocando(false)
    }
  }

  function formatarTempo(segundos) {
    if (!segundos || Number.isNaN(segundos)) {
      return '0:00'
    }

    const minutos = Math.floor(segundos / 60)
    const segundosRestantes = Math.floor(segundos % 60)

    return `${minutos}:${segundosRestantes
      .toString()
      .padStart(2, '0')}`
  }

  function mudarTempo(event) {
    const audio = audioRef.current
    if (!audio || !duracao) return

    const barra = event.currentTarget
    const largura = barra.getBoundingClientRect()
    const clique = event.clientX - largura.left
    const porcentagem = clique / largura.width

    audio.currentTime = porcentagem * duracao
  }

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    function atualizarTempo() {
      setTempoAtual(audio.currentTime)
    }

    function carregarDuracao() {
      setDuracao(audio.duration)
    }

    function musicaTerminou() {
      setTocando(false)
      setTempoAtual(0)
    }

    audio.addEventListener('timeupdate', atualizarTempo)
    audio.addEventListener('loadedmetadata', carregarDuracao)
    audio.addEventListener('ended', musicaTerminou)

    return () => {
      audio.removeEventListener('timeupdate', atualizarTempo)
      audio.removeEventListener('loadedmetadata', carregarDuracao)
      audio.removeEventListener('ended', musicaTerminou)
    }
  }, [])

  const progresso =
    duracao > 0
      ? (tempoAtual / duracao) * 100
      : 0

  return (
    <div className="music-app">

      <div className="music-header">
        <button onClick={onClose}>‹</button>
        <span>tocando agora</span>
        <div></div>
      </div>

      <div className="album-cover">
        <img
          src="/music-cover.jpg"
          alt="capa"
        />
      </div>

      <div className="music-info">
        <h2>Iris</h2>
        <p>Goo Goo Dolls</p>
      </div>

      <div className="music-progress">

        <div
          className="progress-line"
          onClick={mudarTempo}
        >
          <div
            className="progress-filled"
            style={{
              width: `${progresso}%`,
            }}
          ></div>
        </div>

        <div className="music-times">
          <span>
            {formatarTempo(tempoAtual)}
          </span>

          <span>
            -{formatarTempo(
              Math.max(duracao - tempoAtual, 0)
            )}
          </span>
        </div>

      </div>

      <div className="music-controls">

        <button
          onClick={() => {
            audioRef.current.currentTime = 0
          }}
        >
          ⏮
        </button>

        <button
          className="play-button"
          onClick={toggleMusic}
        >
          {tocando ? '⏸' : '▶'}
        </button>

        <button
          onClick={() => {
            audioRef.current.currentTime =
              Math.min(
                audioRef.current.currentTime + 10,
                duracao
              )
          }}
        >
          ⏭
        </button>

      </div>

      <p className="music-message">
        essa sempre vai me lembrar de você ❤️
      </p>

      <audio
        ref={audioRef}
        src="/iris.mp3"
      />

    </div>
  )
}

export default Music