function Messages({ onClose }) {
  return (
    <div className="messages-app">

      <div className="messages-header">
        <button className="back-button" onClick={onClose}>
          ‹
        </button>

        <div className="contact-photo">
          <img src="/giovanna.jpg" alt="Momozi" />
        </div>

        <div className="contact-info">
          <strong>Momozi 💙</strong>
          <span>online</span>
        </div>

        <div className="messages-actions">
          <span>📹</span>
          <span>📞</span>
          <span>⋮</span>
        </div>
      </div>

      <div className="messages-content">

        <div className="message received">
          <span>oi linduco</span>
          <small>14:31</small>
        </div>

        <div className="message sent">
          <span>oi amor</span>
          <small>14:31 ✓✓</small>
        </div>

        <div className="message received">
          <span>oq vc ta fazendo?</span>
          <small>14:32</small>
        </div>

        <div className="message sent">
          <span>programando uma coisa</span>
          <small>14:32 ✓✓</small>
        </div>

        <div className="message received">
          <span>oq?</span>
          <small>14:33</small>
        </div>

        <div className="message sent">
          <span>segredo</span>
          <small>14:33 ✓✓</small>
        </div>

      </div>

      <div className="message-input">
        <div className="fake-input">
          <span>😊</span>
          <span className="placeholder">Mensagem</span>
          <span>📎</span>
          <span>📷</span>
        </div>

        <button className="mic-button">
          🎤
        </button>
      </div>

    </div>
  )
}

export default Messages